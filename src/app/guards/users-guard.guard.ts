import { User } from 'src/app/models/user.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { take, map, tap } from 'rxjs/operators';
import { NotiflixService } from '../services/notiflix.service';

@Injectable({ providedIn: 'root' })
export class UsersGuard implements CanActivate {
  constructor(private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var user: User
    return this.auth.user$.pipe(
      take(1),
      map(u => u.roles.admin ? true : false),
      tap(isAdmin => {
        if(!isAdmin) console.log("Only admins allowed.")
      }))
  }
}