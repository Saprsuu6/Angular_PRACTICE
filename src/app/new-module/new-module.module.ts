import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [HeaderComponent, ProductsComponent, ProductComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ProductsComponent],
})
export class NewModuleModule {
  constructor() {}
}
