import { Component, OnInit } from '@angular/core';
import { CategoryItem } from '../../models/category-items';

@Component({
  selector: 'keshJay-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryItemList: CategoryItem[] = [
    { id: 1, title: 'Home Cleaning', imageUrl: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1619077088022-1e5697.jpeg' },
    { id: 2, title: 'End Of Lease Clean', imageUrl: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1619077086727-6efb16.jpeg' },
    { id: 3, title: 'Carpet Steam Cleaning', imageUrl: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1619077069360-4993fd.jpeg' },
    { id: 4, title: 'Furniture Assembly', imageUrl: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1619077074826-a2418a.jpeg' },
    { id: 5, title: 'Sofa Steam Cleaning', imageUrl: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1619077075132-08e779.jpeg' },
    { id: 6, title: 'Gardening', imageUrl: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1619077087231-764d49.jpeg' },
    { id: 7, title: 'Women\'s Massage', imageUrl: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1620267898156-73ac68.png' },
    { id: 8, title: 'Men\'s Massage', imageUrl: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1620267899192-dd9b0b.png' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
