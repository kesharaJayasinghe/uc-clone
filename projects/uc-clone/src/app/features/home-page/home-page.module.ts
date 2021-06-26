import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselListComponent } from './components/carousel-list/carousel-list.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ReviewsCarouselComponent } from './components/reviews-carousel/reviews-carousel.component';
import { ReferSectionComponent } from './components/refer-section/refer-section.component';


@NgModule({
  declarations: [
    HomePageComponent,
    CarouselListComponent,
    ServicesListComponent,
    ReviewsCarouselComponent,
    ReferSectionComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class HomePageModule { }
