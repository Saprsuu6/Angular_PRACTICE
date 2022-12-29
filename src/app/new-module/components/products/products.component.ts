import {
  AfterViewChecked,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css', './loader.css', './preloader.css'],
})
export class ProductsComponent implements OnInit {
  @ViewChild('preloader') preloader: ElementRef<HTMLDivElement>;
  @ViewChild('loader') loader: ElementRef<HTMLDivElement>;
  public products: IProduct[];

  constructor(private productService: ApiProductService) {}

  ngOnInit(): void {
    this.productService.loadAllProducts();
    this.products = this.productService.getProducts();

    var preloader = document.body.getElementsByClassName('preloader')[0];
    var content = document.body.getElementsByClassName('content')[0];

    setTimeout(() => {
      if (!preloader.classList.contains('done')) {
        content.classList.add('done-content');
        preloader.classList.add('done-preloader');
      }
    }, 2000);
  }
}
