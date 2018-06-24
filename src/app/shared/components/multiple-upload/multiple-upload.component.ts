import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-upload',
  templateUrl: './multiple-upload.component.html',
  styleUrls: ['./multiple-upload.component.css']
})
export class MultipleUploadComponent implements OnInit {
  multiImage: any[] = [];

  constructor() { }

  addAnother(){
    this.multiImage.push({'sameMulti': './assets/images/bitcoin.png','fileSameMulti':null});
  }

  deleteFile(i: any = null){
    var conf = confirm('ยืนยันการลบรูปภาพ?');

    if(conf==true){
      // this.multiImage.splice(i, 1);
    }
  }

  ngOnInit() {
    // this.defaultImg = './assets/images/bitcoin.png';
  }

}
