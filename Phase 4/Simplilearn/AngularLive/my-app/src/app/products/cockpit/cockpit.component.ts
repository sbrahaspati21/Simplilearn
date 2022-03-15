import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output()
  productAdded = new EventEmitter<{
    productName: string;
    productAvailability: string;
    stockCount: number;
  }>();

  newProductName = '';
  newStockCount = 0;
  constructor() {}

  ngOnInit(): void {}
  onAddProduct() {
    // console.log('productd added: ' + this.newProductName);
    this.productAdded.emit({
      productName: this.newProductName,
      productAvailability:
        this.newStockCount > 0 ? 'Available' : 'Out of Stock',
      stockCount: this.newStockCount,
    });
  }
}
