import { User } from './../../models/user.model';
import { Question } from './../../models/question.model';
import { Component, OnInit, Input } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { NotiflixService } from 'src/app/services/notiflix.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {
  @Input('question') question: Question
  user: User
  isEditing: boolean = false
  questionToEdit: Question
  constructor(private questionsService: QuestionsService, private notiflixService: NotiflixService, public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.user = user)
  }
  showEdit(q: Question) {
    if (this.auth.onlyModerator(this.user) && this.user != null) {
      this.isEditing = true
      this.questionToEdit = q
    }
  }
  hideEdit() {
    this.isEditing = false
    this.questionToEdit = null
  }
  deleteQuestion(q: Question) {
    if (this.auth.onlyModerator(this.user) && this.user != null)
      this.questionsService.deleteQuestion(q)
  }
  editSubmit(q: Question, id: string) {
    if (this.auth.onlyModerator(this.user) && this.user != null) {
      this.hideEdit()
      this.questionsService.updateQuestion(q, id)
    }
  }
}
