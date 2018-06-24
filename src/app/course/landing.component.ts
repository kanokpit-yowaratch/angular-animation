import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  currentRoute: any;
  constructor(private router: Router) {}

  prev() {
    console.log(this.router.url);
    if (this.router.url == "/course" || this.router.url == "/course/overview") {
      this.router.navigate(["/"]);
    }
    if (this.router.url == "/course/transitions") {
      this.router.navigate(["course/overview"]);
    }
    if (this.router.url == "/course/transforms") {
      this.router.navigate(["course/transitions"]);
    }
  }

  next() {
    console.log(this.router.url);
    if (this.router.url == "/course" || this.router.url == "/course/overview") {
      this.router.navigate(["course/transitions"]);
    }
    if (this.router.url == "/course/transitions") {
      this.router.navigate(["course/transforms"]);
    }
  }

  backToOverview() {
    this.router.navigate(["course/overview"]);
  }

  ngOnInit() {
    if (this.router.url == "/course") {
      this.router.navigate(["course/overview"]);
    }
  }
}
