import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HttpModule, Http } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CommonService } from './shared/services/common.service';
import { UploadService } from './shared/services/upload.service';

import { AppComponent } from "./app.component";
import { LandingComponent } from "./course/landing.component";
import { CourseOverviewComponent } from "./course/overview/course-overview.component";
import { TransitionComponent } from "./course/transition/transition.component";
import { SlideLoadingComponent } from "./slide-loading/slide-loading.component";
import { TransformsComponent } from './course/transforms/transforms.component';
import { SingleComponent } from "./single/single.component";
import { MultipleComponent } from "./multiple/multiple.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CourseOverviewComponent,
    TransitionComponent,
    SlideLoadingComponent,
    TransformsComponent,
    SingleComponent,
    MultipleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "", component: SlideLoadingComponent },
      {
        path: "course",
        component: LandingComponent,
        children: [
          { path: "overview", component: CourseOverviewComponent },
          { path: "transitions", component: TransitionComponent },
          { path: "transforms", component: TransformsComponent }
        ]
      },
      { path: "single", component: SingleComponent },
      { path: "multiple", component: MultipleComponent },
      { path: "**", redirectTo: "", pathMatch: "full" }
    ]),
    AngularFontAwesomeModule
  ],
  bootstrap: [AppComponent],
  providers: [
    CommonService,
    UploadService
  ]
})
export class AppModule {}
