import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    // vendor
    // CommonModule
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    // material
    MatButtonModule,
    MatToolbarModule,
  ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
