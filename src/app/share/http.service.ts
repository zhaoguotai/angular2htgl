import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import "rxjs/Rx";


@Injectable()
export class HttpService {

  constructor(
    private http : Http
  ) { }
  //获取数据请求
  httpGet(url,params){
    console.log("调用get请求");
    return this.http.get(url,{search:params}).map(res => res.json())
  }

  public headers = new Headers({ 'Content-Type': 'application/json' }); //其实不表明 json 也可以, ng 默认好像是 json
  // public options = new RequestOptions({ headers: this.headers });
  encodeParams(params:Object){
    return Object.keys(params)
      .filter(key => params[key])
      .reduce((sum:URLSearchParams,key:string) =>{
        sum.append(key,params[key])
        return sum
      },new URLSearchParams)

  }
  //传递数据请求
  httpPost(url,params){
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json' );
    let body = this.encodeParams(params).toString();
    let newurl =url+'?'+body;
    console.log(newurl+2);
    return this.http.post(newurl,{headers:this.headers})
      .toPromise()
      .then((response) => {
        console.log(response)
    })
      .catch(err => console.log(err));
  }
  //更新请求
  httpPut(url,params){
    let body = this.encodeParams(params).toString();
    let newurl = url +'?'+body;
    return this.http.put(newurl,{headers:this.headers})
      .toPromise()
      .then( res => {
        console.log(res)
      })
      .catch(err => alert(err))
  }
  httpDelete(url,params){
    console.log(123);
    let body = this.encodeParams(params).toString();
    let newurl = url + "?" +body;
    return this.http.delete(newurl)
      .map(res => res.json())
  }
}


