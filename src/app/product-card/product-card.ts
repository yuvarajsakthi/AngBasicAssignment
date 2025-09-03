import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  productName: string = 'Effective Typescript';
  price: number = 2999;
  inStock: boolean = true;
  imageUrl: string = 'ProductImg.png';
  inActive:boolean = false;

  click() {
    this.inStock = !this.inStock;
    this.inActive = !this.inActive;
  }

}
