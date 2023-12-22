import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LandingComponent } from "./course/landing.component";
import { CourseOverviewComponent } from "./course/overview/course-overview.component";
import { TransitionComponent } from "./course/transition/transition.component";
import { SlideLoadingComponent } from "./slide-loading/slide-loading.component";
import { TransformsComponent } from './course/transforms/transforms.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CourseOverviewComponent,
    TransitionComponent,
    SlideLoadingComponent,
    TransformsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
