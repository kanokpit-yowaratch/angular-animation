import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommonService {
  apiEndpoint: string = "http://hive.skuberg.com/api";
  apiPathImage: string = "http://hive.skuberg.com/storage";
  localEndpoint: string = "http://localhost/api";
  localPathImage: string = "http://localhost/storage";
  web: string = "http://hive.skuberg.com";
  lang: string = "";

    constructor(public http: Http){
      this.http = http;
    }

    getData(url: any){
        let lang: any = 'th';
        lang = (lang)? lang : 'th';

        var headers = new Headers();
        headers.append('Authorization', 'Bearer '+window.localStorage.getItem('user_token'));
        headers.append('X-localization', lang);

        return new Promise(resolve => {
            this.http.get(url, {headers: headers}).toPromise().then(resp=>{
                if(resp){
                    let message: any = resp.json().message;
                    let data = (resp.json().data)? resp.json().data : null;
                    resolve({'statusCode':200,'data':data,'message':message});
                }
            }).catch(function(error){
                let errStatus: any = error.status;

                if(errStatus==400){
                    let errResp: any = error.json();
                    let msg: any = '';
            
                    if(errResp.validator){
                        let messages: any = errResp.validator;
                        for(var k in messages){
                          msg += (msg)? '<br />'+ messages[k] : messages[k];
                        }
                    }
                    else if(errResp.message) {
                        msg = errResp.message;
                    } else {
                        for(var k in errResp){
                          msg += (msg)? '<br />'+ errResp[k] : errResp[k];
                        }
                    }
            
                    resolve({'statusCode': errStatus, 'message': msg});
                } else {
                    var sttMsg = (errStatus==0)? 'Service Unavailable.' : errStatus +': '+ error.statusText;
                    resolve({'statusCode': errStatus, 'message': sttMsg});
                }
            });
        });
    }

    delData(url: any){
        var headers = new Headers();
        headers.append('Authorization', 'Bearer '+window.localStorage.getItem('user_token'));

        return new Promise(resolve => {
            this.http.delete(url, {headers: headers}).toPromise().then(resp=>{
                if(resp){
                    let message: any = resp.json().message;
                    let data = (resp.json().data)? resp.json().data : null;
                    resolve({'statusCode':200,'data':data,'message':message});
                }
            }).catch(function(error){
                if(error.status==400){
                    let messages: any = error.json().validator;
                    var msg = '';
                    for(var k in messages){
                      msg += (msg)? '<br>'+ messages[k] : messages[k];
                    }
                    resolve({'statusCode':error.status,'message': msg});
                } else {
                    resolve({'statusCode':error.status,'message': error.status +': '+ error.statusText});
                }
            });
        });
    }

    postData(url: any, inputs: any) {
        var headers = new Headers();
        headers.append('Authorization', 'Bearer '+window.localStorage.getItem('user_token'));

        return new Promise(resolve => {
            this.http.post(url, inputs, {headers: headers}).toPromise().then(resp=>{
                if(resp){
                    let message: any = resp.json().message;
                    let data = (resp.json().data)? resp.json().data : null;
                    resolve({'statusCode':200,'data':data,'message':message});
                }
            }).catch(function(error){
                let errStatus: any = error.status;

                if(errStatus==400){
                    let errResp: any = error.json();
                    let msg: any = '';
            
                    if(errResp.validator){
                        let messages: any = errResp.validator;
                        for(var k in messages){
                          msg += (msg)? '<br />'+ messages[k] : messages[k];
                        }
                    }
                    else if(errResp.message) {
                        msg = errResp.message;
                    } else {
                        for(var k in errResp){
                          msg += (msg)? '<br />'+ errResp[k] : errResp[k];
                        }
                    }
            
                    resolve({'statusCode': errStatus, 'message': msg});
                } else {
                    resolve({'statusCode': errStatus, 'message': errStatus +': '+ error.statusText});
                }
            });
        });
    }
    
    putData(url: any, inputs: any) {
        var headers = new Headers();
        headers.append('Authorization', 'Bearer'+ window.localStorage.getItem("user_token"));

        return new Promise(resolve => {
            this.http.put(url, inputs, {headers: headers}).toPromise().then(resp=>{
                if(resp){
                    let message: any = resp.json().message;
                    let data = (resp.json().data)? resp.json().data : null;
                    resolve({'statusCode':200,'data':data,'message':message});
                }
            }).catch(function(error){
                let errStatus: any = error.status;

                if(errStatus==400){
                    let errResp: any = error.json();
                    let msg: any = '';
            
                    if(errResp.validator){
                        let messages: any = errResp.validator;
                        for(var k in messages){
                          msg += (msg)? '<br />'+ messages[k] : messages[k];
                        }
                    }
                    else if(errResp.message) {
                        msg = errResp.message;
                    } else {
                        for(var k in errResp){
                          msg += (msg)? '<br />'+ errResp[k] : errResp[k];
                        }
                    }
            
                    resolve({'statusCode': errStatus, 'message': msg});
                } else {
                    resolve({'statusCode': errStatus, 'message': errStatus +': '+ error.statusText});
                }
            });
        });
    }

    postLoadPage(url: any, inputs: any) {
        var headers = new Headers();
        headers.append('Authorization', 'Bearer '+window.localStorage.getItem('user_token'));

        return new Promise(resolve => {
            let data: any = this.http.post(url, inputs, {headers: headers}).toPromise().then(resp=>{
                if(resp){
                    resolve({'statusCode':200,'body':resp['_body']});
                }
            }).catch(function(error){
                let errStatus: any = error.status;

                if(errStatus==400){
                    let errResp: any = error.json();
                    let msg: any = '';
            
                    if(errResp.validator){
                        let messages: any = errResp.validator;
                        for(var k in messages){
                          msg += (msg)? '<br />'+ messages[k] : messages[k];
                        }
                    }
                    else if(errResp.message) {
                        msg = errResp.message;
                    } else {
                        for(var k in errResp){
                          msg += (msg)? '<br />'+ errResp[k] : errResp[k];
                        }
                    }
            
                    resolve({'statusCode': errStatus, 'message': msg});
                } else {
                    resolve({'statusCode': errStatus, 'message': errStatus +': '+ error.statusText});
                }
            });
        });
    }

    checkExistingImage(urlImage: any){
        return new Promise(resolve => {
            this.http.get(urlImage).toPromise().then(resp=>{
                resolve({'statusCode':200});
            }).catch(function(error){
                resolve({'statusCode':error.status});
            });
        });
    }
}