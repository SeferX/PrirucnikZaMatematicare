import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionsService } from 'src/app/services/questions.service';
import { AuthService } from 'src/app/services/auth.service';
import { Question } from 'src/app/models/question.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.sass']
})
export class QuestionAddComponent implements OnInit {
  @ViewChild('addQuestion') addQuestionForm: NgForm
  isHidden: boolean = true
  user: User

  constructor(private questionsService: QuestionsService, public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.user = user)
  }
  show() {
    this.isHidden = !this.isHidden
  }
  onSubmit(q: Question) {
    if (q && this.auth.onlyModerator(this.user)) {
      this.questionsService.addQuestion(q)
      this.addQuestionForm.reset()
    }
  }

}
