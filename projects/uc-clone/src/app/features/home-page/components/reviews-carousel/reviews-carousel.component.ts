import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'keshJay-reviews-carousel',
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.scss']
})
export class ReviewsCarouselComponent implements OnInit {
  activeCategory: SlidesOutputData = new SlidesOutputData;

  carouselItemList = [
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_8beac750.jpeg',
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_8dea19c0.jpeg',
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_8cb20ef0.jpeg',
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_92a1fc80.jpeg',
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_8ad6e650.jpeg',
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_8c4c6f50.jpeg',
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_89e3fad0.jpeg',
    'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_91840960.jpeg'
  ];

  constructor() { }

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
    dots: false,
    navSpeed: 900,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
  }

  getPassedData(data: SlidesOutputData) {
    this.activeCategory = data;
    console.log(this.activeCategory);
  }

}
