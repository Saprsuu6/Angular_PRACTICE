import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements AfterViewInit {
  @Input('product') product: IProduct;
  @ViewChild('image') image: ElementRef<HTMLDivElement>;
  constructor() {}

  ngAfterViewInit(): void {
    this.image.nativeElement.style.background = `url('${this.product.image}') no-repeat center`;
    this.image.nativeElement.style.backgroundSize = '100%';
  }
}
