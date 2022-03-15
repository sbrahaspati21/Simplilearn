import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      productName: 'TABLE',
      productAvailability: 'In Stock',
      stockCount: 10,
    },
    {
      productName: 'CHAIR',
      productAvailability: 'Out of Stock',
      stockCount: 0,
    },
  ];
  allowAddProduct = true;
  productAddStatus = 'Product Added';
  productCreated = false;
  constructor() {}

  ngOnInit(): void {}
  onProductAdded(productData: {
    productName: string;
    productAvailability: string;
    stockCount: number;
  }) {
    this.products.push({
      productName: productData.productName,
      productAvailability: productData.productAvailability,
      stockCount: productData.stockCount,
    });
  }
}
