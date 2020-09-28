import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private afs: AngularFirestore) {
  }
  getUsers() {
    return this.afs.collection("users").get()
  }
  editRoles(user: User) {
    this.afs
      .doc(`users/${user.uid}`)
      .update(user)
  }
}
