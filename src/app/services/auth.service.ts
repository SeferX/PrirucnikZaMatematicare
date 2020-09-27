import { Injectable } from '@angular/core';
import { auth } from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        else return of(null)
      })
    )
  }

  async googleLogin() {
    const provider = new auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  async signOut() {
    await this.afAuth.auth.signOut()
    this.router.navigate([''])
  }

  updateUserData({ uid, email, displayName, photoURL, roles }: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(`users/${uid}`)
    const data = { uid, email, displayName, photoURL, roles }
    return userRef.set(data, { merge: true })
  }

  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true
      }
    }
    return false
  }

  canRead(user: User): boolean {
    const allowedRoles = ['admin', 'moderator', 'guest']
    return this.checkAuthorization(user, allowedRoles)
  }

  canEdit(user: User): boolean {
    const allowedRoles = ['admin', 'moderator']
    return this.checkAuthorization(user, allowedRoles)
  }

  canDelete(user: User): boolean {
    const allowedRoles = ['admin', 'moderator']
    return this.checkAuthorization(user, allowedRoles)
  }
}

