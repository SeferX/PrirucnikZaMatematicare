import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';
import { QuestionsService } from '../services/questions.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }
}
