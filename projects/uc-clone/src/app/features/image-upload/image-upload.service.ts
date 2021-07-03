import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { CarouselListDocModel } from '../../models/carouselList';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  imageCollection: AngularFirestoreCollection<any> = this.afs.collection('carouselList');

  constructor(private afs: AngularFirestore) { }

  uploadImage(data: CarouselListDocModel) {
    this.imageCollection.add(data).then((docRef) => {
      this.imageCollection.doc(docRef.id).update({
        docId: docRef.id
      })
    })
      .catch((error) => {
        console.log(error);
      })
  }
}
