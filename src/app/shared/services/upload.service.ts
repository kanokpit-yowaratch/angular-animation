import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class UploadService {
  host: string = "";
  constructor(private commonService: CommonService) {
    this.host = this.commonService.apiEndpoint;
  }

  addCoverImage(inputs: any){
    return this.commonService.postData(this.host +"/test", inputs);
  }
}
