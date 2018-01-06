import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {verifyService} from "../service/verify.component";
@Component({
    moduleId: module.id,
    selector: 'myLogin',
    templateUrl: 'login.component.html',
    providers:[verifyService]
})
export class loginComponent implements OnInit {
    constructor(public heroService: verifyService,public router:Router) {
        
     }
     model:{}={};
    doLogin(){
        console.log(111)
        this.router.navigate(['/index'])
        console.log(this.model)
     }
    ngOnInit() { 
        let bbb=this.heroService.GVerify()
        bbb({
            id: "verify", //容器Id
			canvasId: "verifyCanvas", //canvas的ID,可以不用设置
			width: "100", //canvas宽度
			height: "30", //canvas高度
			type: "number", //图形验证码默认类型blend:数字字母混合类型、number:纯数字、letter:纯字母
			code: ""
        })
    }
}