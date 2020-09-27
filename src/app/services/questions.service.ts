import { Question } from './../models/question.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { NotiflixService } from './notiflix.service';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  constructor(private afs: AngularFirestore, private notiflix: NotiflixService) { }
  getQuestions() {
    return this.afs.collection<Question>('questions').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        var data = a.payload.doc.data() as Question
        data.id = a.payload.doc.id
        return data
      })
    }))
  }
  deleteQuestion(q: Question) {
    return this.afs
      .collection("questions")
      .doc(q.id)
      .delete()
      .then(
        () => { this.notiflix.success("Question successfuly deleted") },
        () => this.notiflix.failure("Error deleting question."))
  }
  addQuestion(q: Question) {
    return this.afs
      .collection("questions")
      .add(q)
      .then(
        () => { this.notiflix.success("Question successfuly added") },
        () => this.notiflix.failure("Error adding question.")
      )
  }
  updateQuestion(q: Question, id: string) {
    this.afs
      .doc(`questions/${id}`)
      .update(q)
      .then(
        () => { this.notiflix.success("Question successfuly updated") },
        () => this.notiflix.failure("Error updating question."))
  }
}