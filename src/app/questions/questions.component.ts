import { Question } from './../models/question.model';
import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass']
})
export class QuestionsComponent implements OnInit {
  questions: Question[]
  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(questions => this.questions = questions)
  }

}
