import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageUploadRoutingModule } from './image-upload-routing.module';
import { ImageUploadComponent } from './image-upload.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    ImageUploadRoutingModule,
    FormsModule,
    MatSnackBarModule

  ]
})
export class ImageUploadModule { }
