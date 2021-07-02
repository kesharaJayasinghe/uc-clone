import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, DocumentData, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CarouselList } from './models/carouselListViewModel';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarouselListDocModel } from '../../models/carouselList';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  carouselList: Array<CarouselList> = [];

  private $carouselList: BehaviorSubject<Array<CarouselList>> = new BehaviorSubject (
    this.carouselList
  );
  lastDoc: QueryDocumentSnapshot<DocumentData> | undefined;
  subscriptions: Subscription[] = [];

  constructor(private afs: AngularFirestore, ) { 
    this.getCarouselInit();
  }

  async getCarouselInit() {
    this.carouselList = [];
    this.$carouselList.next(this.carouselList);
    this.subscriptions = [];
    const sub = this.afs
      .collection("carouselList", (ref) => ref.orderBy("title", "asc"))
      .snapshotChanges()
      .subscribe((data) => {
        this.updateCarouselArray(data as DocumentChangeAction<DocumentData>[], true);
      });
      this.subscriptions.push(sub);
  }

  updateCarouselArray(data: DocumentChangeAction<DocumentData>[], past: boolean) {
    if (data.length === 0 ) {
      return;
    }
    if (past) {
      this.lastDoc = data.slice(-1).pop()?.payload.doc;
    }
    const _carouselList = data.map((a) => {
      let _carouselItem = a.payload.doc.data() as CarouselListDocModel;
      _carouselItem.docId = a.payload.doc.id;
      return _carouselItem;
    });
    _carouselList.forEach((_incomingCarouselItem) => {
      const carouselItemIds = this.carouselList.map((carouselItem) => carouselItem.carouselDocId);
      const indexOfIncomingItem = carouselItemIds.indexOf(_incomingCarouselItem.docId);
      if (indexOfIncomingItem >= 0) {
        this.carouselList[indexOfIncomingItem] = new CarouselList(_incomingCarouselItem);
      } else {
        if(past) {
          this.carouselList.push(new CarouselList(_incomingCarouselItem));
        } else {
          this.carouselList.unshift(new CarouselList(_incomingCarouselItem));
        }
      }
    });
    this.$carouselList.next(this.carouselList);
  }

  getCarouselItems() {
    return this.$carouselList.asObservable();
  }
}

