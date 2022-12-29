import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewModuleModule } from './new-module/new-module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
