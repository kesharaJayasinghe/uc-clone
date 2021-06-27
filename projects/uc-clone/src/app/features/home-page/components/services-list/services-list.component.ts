import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'keshJay-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  activeCategory: SlidesOutputData = new SlidesOutputData;

  carouselItemList = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1614748463656-b5be2c.jpeg',
      alt: 'Service 1',
      title: 'Home Cleaning',
      subtitle: 'Same day or next day bookings available'
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1614748442920-e9b89c.jpeg',
      alt: 'Service 2',
      title: 'End Of Lease Clean',
      subtitle: '100% bond back guaranteed'
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1614748453321-c64a67.jpeg',
      alt: 'Service 3',
      title: 'Carpet & Upholstery Cleaning',
      subtitle: 'Bring back that new carpet feel'
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1614748457938-e8587f.jpeg',
      alt: 'Service 4',
      title: 'Gardening',
      subtitle: 'Upfront pricing with no hidden cost'
    },
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
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    // nav: false,
  };

  ngOnInit(): void {
  }

  getPassedData(data: SlidesOutputData) {
    this.activeCategory = data;
    // console.log(this.activeCategory);
  }

}
