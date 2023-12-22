import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-transforms",
  templateUrl: "./transforms.component.html",
  styleUrls: ["./transforms.component.scss"]
})
export class TransformsComponent implements OnInit {
  twoD: boolean = false;
  threeD: boolean = false;
  twoDRotate: boolean = false;
  twoDScale: boolean = false;
  twoDTranslate: boolean = false;
  twoDSkew: boolean = false;
  perspective: boolean = false;
  threeDRotate: boolean = false;
  threeDScale: boolean = false;
  constructor() {}

  showTwoD() {
    this.twoD = !this.twoD;
    this.hideAllThreeD();
  }

  showThreeD() {
    this.threeD = !this.threeD;
    this.hideAllTwoD();
  }

  showTwoDRotate() {
    this.twoDRotate = !this.twoDRotate;
    this.hideAllThreeD();
    this.twoDScale = false;
    this.twoDTranslate = false;
    this.twoDSkew = false;
  }

  showTwoDScale() {
    this.twoDScale = !this.twoDScale;
    this.hideAllThreeD();
    this.twoDRotate = false;
    this.twoDTranslate = false;
    this.twoDSkew = false;
  }

  showTwoDTranslate() {
    this.twoDTranslate = !this.twoDTranslate;
    this.hideAllThreeD();
    this.twoDScale = false;
    this.twoDRotate = false;
    this.twoDSkew = false;
  }

  showTwoDSkew() {
    this.twoDSkew = !this.twoDSkew;
    this.hideAllThreeD();
    this.twoDTranslate = false;
    this.twoDScale = false;
    this.twoDRotate = false;
  }

  showPerspective() {
    this.perspective = !this.perspective;
    this.hideAllTwoD();
  }

  showThreeDRotate() {
    this.threeDRotate = !this.threeDRotate;
    this.perspective = false;
  }

  showThreeDScale() {
    this.threeDScale = !this.threeDScale;
    this.perspective = false;
    this.threeDRotate = false;
  }

  hideAllTwoD() {
    this.twoD = false;
    this.twoDRotate = false;
    this.twoDScale = false;
    this.twoDTranslate = false;
    this.twoDSkew = false;
  }

  hideAllThreeD() {
    this.perspective = false;
    this.threeDRotate = false;
    this.threeDScale = false;
  }

  ngOnInit() {
    this.hideAllTwoD();
    this.hideAllThreeD();
  }
}
