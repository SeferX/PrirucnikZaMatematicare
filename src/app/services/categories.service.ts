import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs: AngularFirestore) { }

  getCategories(catName: string) {
    return this.afs.collection(catName).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        var data = a.payload.doc.data() as any
        data.id = a.payload.doc.id
        return data
      })
    }))
  }
  getCategory(catName: string, id: string) {
    return this.afs.collection(`${catName}/${id}`).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        var data = a.payload.doc.data() as any
        data.id = a.payload.doc.id
        return data
      })
    }))
  }
}
