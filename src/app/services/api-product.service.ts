import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ApiProductService {
  public products: IProduct[];
  constructor() {
    this.products = [];
  }

  loadAllProducts(): void {
    var url = fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        var keys = Object.keys(json);
        keys.forEach((key) => {
          this.products.push(json[key]);
        });
      });
  }

  getProducts(): IProduct[] {
    return this.products;
  }
}
