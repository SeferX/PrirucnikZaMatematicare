import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  users: User[] = []
  currentlyLoggedInUser: User
  constructor(private usersService: UsersService, public authService: AuthService) { }

  ngOnInit() {
    this.authService.user$.subscribe(u => this.currentlyLoggedInUser = u)
    this.usersService.getUsers()
      .subscribe(ss => {
        ss.docs.forEach((user) => {
            this.users.push(user.data());
        });
      });
    this.users.splice(this.users.indexOf(this.currentlyLoggedInUser),1)
  }

}
