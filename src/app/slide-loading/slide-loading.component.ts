import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-slide-loading',
  templateUrl: './slide-loading.component.html',
  styleUrls: ['./slide-loading.component.scss']
})
export class SlideLoadingComponent implements OnInit {
  currentRoute: any;
  count: number;
  transformValue: string;

  constructor(private router: Router) { }

  ngOnInit() {
    let percent: number;
    this.count = 0;
    percent = this.count;

    var interval = setInterval(() => {
      percent++;
      this.count = percent;
      this.transformValue = "translate(0" + "," + (100 - percent) + "%)";
      if (percent == 100) {
        clearInterval(interval);

        // this.router.navigate(["course"]);
      }
    }, 30);
  }

}
