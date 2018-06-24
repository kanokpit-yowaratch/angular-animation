import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {
  transPropList: any[] = [];
  showShortTranst: boolean = false;
  showWidth: boolean = false;
  showSyntax: boolean = false;
  constructor() { }

  transtProp(prop: number) {
    this.transPropList.forEach((obj, index) => {
      if(obj.prop != prop){
        this.transPropList[index].ref = false;
      } else {
        this.transPropList[index].ref = !this.transPropList[index].ref;
      }
    });
  }

  showShortTransition() {
    this.showShortTranst = !this.showShortTranst;
  }

  showPropWidth() {
    this.showWidth = !this.showWidth;
    this.transtProp(-1);
  }

  showHideSyntax() {
    this.showSyntax = !this.showSyntax;
    this.transtProp(-1);
  }

  ngOnInit() {
    this.transPropList = [
      {'prop':'width-height','title':'width, height','ref':false},
      {'prop':'color','title':'color, background-color','ref':false},
      {'prop':'opacity','title':'opacity','ref':false},
      // {'prop':'visibility','title':'visibility','ref':false},
      {'prop':'margin','title':'margin','ref':false}
      // {'prop':'padding','title':'padding','ref':false}
    ];
  }

}
