import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss']
})
export class CourseOverviewComponent implements OnInit {
  fourLineThrough: boolean;
  constructor() { }

  lineThrough() {
    this.fourLineThrough = !this.fourLineThrough;
  }

  ngOnInit() {
    this.fourLineThrough = false;
  }

}
