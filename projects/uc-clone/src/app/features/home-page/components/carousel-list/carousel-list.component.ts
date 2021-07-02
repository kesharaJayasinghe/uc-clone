import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { CarouselService } from 'ngx-owl-carousel-o/lib/services/carousel.service';
import { Subscription } from 'rxjs';
import { HomeService } from '../../home.service';
import { CarouselList } from '../../models/carouselListViewModel';

@Component({
  selector: 'keshJay-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.scss']
})
export class CarouselListComponent implements OnInit, OnDestroy {
  activeCategory: SlidesOutputData = new SlidesOutputData;

  // carouselItemList = [
  //   {
  //     id: 1,
  //     src: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_1180/t_high_res_template/images/growth/home-screen/1617162388211-2cb466.jpeg',
  //     alt: 'Category 1',
  //     title: '10,000+ homes cleaned',
  //     subtitle: 'Rated 4.7 out of 5'
  //   },
  //   {
  //     id: 2,
  //     src: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_1180/t_high_res_template/images/growth/home-screen/1617162381884-84ae12.jpeg',
  //     alt: 'Category 2',
  //     title: 'Equipment included',
  //     subtitle: 'Experts bring everything needed'
  //   },
  //   {
  //     id: 3,
  //     src: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_1180/t_high_res_template/images/growth/home-screen/1617162387280-7e88d2.jpeg',
  //     alt: 'Category 3',
  //     title: 'Add extras such as',
  //     subtitle: 'Oven clean for $29'
  //   },
  // ];

  subscription = new Subscription();
  carouselList: CarouselList[] = [];

  constructor(private homeService: HomeService) {
    this.subscription = homeService.getCarouselItems().subscribe((data) => {
      if (data) {
        this.carouselList = data;
      }
    })
  }

  customOptions: OwlOptions = {
    items: 1,
    merge: true,
    margin: 30,
    center: true,
    loop: true,
    autoplay: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    // dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
    // nav: false,
  };

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.homeService.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  getPassedData(data: SlidesOutputData) {
    this.activeCategory = data;
    // console.log(this.activeCategory);
  }

}
