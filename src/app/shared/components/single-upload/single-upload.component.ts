import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-single-upload',
  templateUrl: './single-upload.component.html',
  styleUrls: ['./single-upload.component.scss']
})
export class SingleUploadComponent implements OnInit {
  same: any;
  fileSame: any;
  showSelectSameMessage: boolean;
  selectSameMessage: string;

  constructor(private uploadService: UploadService) { }

  selectImage(event: any){
    var file = event.srcElement.files[0];
    var type = ( file )? file.type : '' ;
    var size = ( file )? file.size : 0 ;
    var name = ( file )? file.name : '' ;

    if(type){
      if(!(type.toLowerCase()=='image/jpg' || type.toLowerCase()=='image/jpeg' || type.toLowerCase()=='image/png' || type.toLowerCase()=='image/gif')){
        this.showSelectSameMessage = true;
        this.selectSameMessage = 'File type is invalid!';
      } else {
        if(size > 5242880){ // 5Mb
          this.showSelectSameMessage = true;
          this.selectSameMessage = 'File size more than 5Mb!';
        } else {
          var img = <HTMLElement>document.querySelector("#coverPreview img");
          img['src'] = file;

          var reader = new FileReader();
          
          reader.onload = (function(aImg){
            return function(e: any){
              aImg['src'] = e.target.result;
            };
          })(img);
          reader.readAsDataURL(file);

          this.fileSame = file;
          this.callApiUploadCover(file);
          this.showSelectSameMessage = false;
        }
      }
    }
  }

  deleteFile(){
    var conf = confirm('ยืนยันการลบรูปภาพ?');

    if(conf==true){
        this.fileSame = null;
        this.same ='./assets/images/no-image.png';
        var img = <HTMLElement>document.querySelector("#coverPreview img");
        img['src'] = this.same;
    }
  }

  callApiUploadCover(file: any){
    var inputs = new FormData();
    inputs.append("image", file);

    this.uploadService.addCoverImage(inputs).then(data=>{
      let d: any = data;

      if(d.statusCode != 200){
        this.showSelectSameMessage = true;
        this.selectSameMessage = d.message;

        setTimeout(() => {
          this.selectSameMessage = '';
          this.showSelectSameMessage = false;
        }, 3000);
      }
    });
  }

  ngOnInit() {
    this.fileSame = null;
    this.same = './assets/images/no-image.png';
    this.showSelectSameMessage = false;
  }

}
