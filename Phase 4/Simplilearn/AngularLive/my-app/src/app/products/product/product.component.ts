import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  // productName: string = 'HeadPhones';
  // productAvailability: string = 'In Stock';
  // stockCount: number = 20;

  @Input('productElement')
  productElement: {
    productName: string;
    productAvailability: string;
    stockCount: number;
  };

  // getStockCount() {
  //   return this.stockCount;
  // }
  // onUpdateProductStock(event: any) {
  //   this.stockCount = event.target.value;
  // }
  constructor() {}

  ngOnInit(): void {}
}
