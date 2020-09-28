import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  @Input('user') user: User
  loggedInUser: User
  constructor(private auth: AuthService, private usersService: UsersService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(u => this.loggedInUser = u)
  }
  editRole(user: User){
    if(this.auth.onlyAdmin(this.loggedInUser))
      this.usersService.editRoles(user)
  }
}
