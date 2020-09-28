import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./_nav.component.sass']
})
export class NavComponent implements OnInit {
  user: User
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(u => this.user = u)
  }

}
