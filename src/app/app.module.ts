import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GlcNgSwiperModule } from "glcp-ng-swiper";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GlcNgSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
