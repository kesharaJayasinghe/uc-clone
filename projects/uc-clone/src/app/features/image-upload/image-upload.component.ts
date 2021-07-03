import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ImageUploadService } from './image-upload.service';
import { Router } from '@angular/router';
import { CarouselListDocModel } from '../../models/carouselList';
import * as firebase from 'firebase';

@Component({
  selector: 'keshJay-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  form!: FormGroup;
  basePath = "/carouselImages";
  task!: AngularFireUploadTask;
  progressValue!: Observable<any>;
  downloadableURL = "";

  constructor(
    private storage: AngularFireStorage,
    private snackBar: MatSnackBar,
    private imageService: ImageUploadService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${file.name}`;
      this.task = this.storage.upload(filePath, file);
      this.progressValue = this.task.percentageChanges();
      (await this.task).ref.getDownloadURL().then((url) => {
        this.downloadableURL = url;
      });
    } else {
      this.snackBar.open("Image Upload Failed!", "Undo", { duration: 3000 });
      this.downloadableURL = "";
    }
  }

  uploadImage(title: string, subtitle: string) {
    if (title == '') {
      this.snackBar.open("Title cannot be empty!", "GOT IT", { duration: 3000 });
      return;
    }
    else if (subtitle == '') {
      this.snackBar.open("Subtitle cannot be empty!", "GOT IT", { duration: 3000 });
      return;
    }
    else if (!this.downloadableURL || this.downloadableURL == '') {
      this.snackBar.open("Please select an image!", "GOT IT", { duration: 3000 });
      return;
    }
    else {
      const carouselListData: CarouselListDocModel = {
        docId: '',
        title: title,
        subtitle: subtitle,
        imageUrl: this.downloadableURL,
        createdAt: firebase.default.firestore.Timestamp.now()
      }
      this.imageService.uploadImage(carouselListData);
      this.router.navigate(['home']);
      this.snackBar.open("Image Upload Successful!", "GOT IT", { duration: 3000 });
    }
  }

}
