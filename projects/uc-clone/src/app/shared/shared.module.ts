import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    CategoryListComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CategoryListComponent, SearchBarComponent]
})
export class SharedModule { }
