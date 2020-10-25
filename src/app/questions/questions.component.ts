import { Question } from './../models/question.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import { AuthService } from '../services/auth.service';
import { MatAccordion } from '@angular/material/expansion';
import { NgForm } from '@angular/forms';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass'],
  providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check-indeterminate' }]
})
export class QuestionsComponent implements OnInit {
  questions: Question[]
  filterAccordionOpened: boolean = false
  kingCategories

  @ViewChild(MatAccordion) filterAccordion: MatAccordion;
  constructor(private questionsService: QuestionsService, public auth: AuthService) { }

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(qs => this.questions = qs)
  }
  openAccordion() {
    this.filterAccordion.openAll()
    this.filterAccordionOpened = true
  }
  closeAccordion() {
    this.filterAccordion.closeAll()
    this.filterAccordionOpened = false
  }
  onSubmitFilter(value: any) {
    console.log(value)
    this.getFilteredQuestions(value.queryFilter, value.difficulty)
  }
  clearForm(filterForm: NgForm) {
    filterForm.resetForm()
    this.questionsService.getQuestions().subscribe(qs => this.questions = qs)
  }
  getFilteredQuestions(queryString: string, difficulty: string) {
    var filters = this.filterCollecting({ queryString, difficulty })
    this.questionsService.getQuestions().subscribe(qs => {
      this.questions = qs.filter(q => {
        for (var key in filters) {
          if (filters[key] != null) {
            if (!q["question"].includes(filters[key]) && key == "queryString")
              return false
            else if (q[key] != filters[key] && key != "queryString")
              return false
          }
        }
        return true
      })
    })
  }
  filterCollecting(f) {
    var filters = {
      queryString: null,
      difficulty: null,
    }
    for (var key in f) {
      if (f[key] !== "") filters[key] = f[key]
    }
    return filters
  }
}
