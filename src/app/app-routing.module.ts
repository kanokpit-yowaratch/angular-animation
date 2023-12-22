import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from "./course/landing.component";
import { CourseOverviewComponent } from "./course/overview/course-overview.component";
import { TransitionComponent } from "./course/transition/transition.component";
import { SlideLoadingComponent } from "./slide-loading/slide-loading.component";
import { TransformsComponent } from './course/transforms/transforms.component';

const routes: Routes = [
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
  // { path: "single", component: SingleComponent },
  // { path: "multiple", component: MultipleComponent },
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
