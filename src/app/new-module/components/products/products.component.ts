import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public products: IProduct[];

  constructor(private productService: ApiProductService) {}

  ngOnInit(): void {
    this.productService.loadAllProducts();
    this.products = this.productService.getProducts();
  }
}
