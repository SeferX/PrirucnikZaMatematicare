import { Question } from 'src/app/models/question.model';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit{
  // questions: Question[]
  // constructor(private questionsService: QuestionsService){}
  ngOnInit(){
  }
}
