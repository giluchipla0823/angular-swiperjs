# GlcpNgSwiper

## Install
```
npm i glcp-ng-swiper swiper
```

Add the swiper styles to the app styles in angular.json.

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "demo": {
      ...
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            ...
            "styles": [
              "node_modules/swiper/swiper-bundle.css",
            ],
            ...
```

You can also add the styles in the main style file of your application "styles.scss".

```scss
@import 'swiper/swiper-bundle.min.css';
```


## Usage
In app.module.ts (or in whichever child module you are using the component) import the GlcpNgSwiper module.

```typescript
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
```

Add the swiper component to your component to create a slider and add the content as you normally would to set up a slider (see the official demos for more information). Note, you don't need to include the swiper-container div just the content, but the slides should be contained in a swiper-wrapper div and have the class swiper-slide.

```html
<swiper [config]="config">
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    <div class="swiper-slide">Slide 4</div>
    <div class="swiper-slide">Slide 5</div>
    <div class="swiper-slide">Slide 6</div>
    <div class="swiper-slide">Slide 7</div>
    <div class="swiper-slide">Slide 8</div>
    <div class="swiper-slide">Slide 9</div>
    <div class="swiper-slide">Slide 10</div>
  </div>
  <!-- Add Pagination -->
  <div class="swiper-pagination"></div>
  <!-- Add Arrows -->
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</swiper>
```

Set the config for the swiper in you component and bind it to the component config property as above.

```typescript
import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    spaceBetween: 30
  };
}
```

Set the height and width of the component.

```scss
swiper {
  height: 300px;
  width: 400px;
}
```

The component also checks for the contents of swiper-wrapper being changed and calls update on the swiper when they are. This allows for dynamic slide lists as you can see from the demo in this repo.

```html
<swiper [config]="config">
  <div class="swiper-wrapper">
    <img class="swiper-slide" *ngFor="let image of images" [src]="image" />
  </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</swiper>
```

## Accessing the Swiper instance
When a new instance of Swiper is created it is set as a property on the component. You can then access this by using a template reference. For example add the template reference #ngSwiper

```html
<swiper [config]="config" #ngSwiper>
  <div class="swiper-wrapper">
    <img class="swiper-slide" *ngFor="let image of images" [src]="image" />
  </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
</swiper>
```

..and then you can use the reference to access the swiper property.

```html
<button (click)="ngSwiper.swiper.createLoop()">loop</button>
```

To access the swiper instance and all of it's properties, methods and events use a viewchild to get the component.swiper property.

```typescript
@ViewChild('ngSwiper', {static: false}) ngSwiper: SwiperComponent;
 
 ...
 
  next() {
    this.ngSwiper.swiper.slideNext();
  }
```