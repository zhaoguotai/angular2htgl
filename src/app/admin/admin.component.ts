import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-admin',
    templateUrl: 'admin.component.html'
})
export class adminComponent implements OnInit {
    public adminLists:Array<any>=[];
    public adminUniqueCode:string="admin";
    public adminTheads:Array<any>=["ID","用户名","真实姓名","最后登录时间","最后登录IP","操作"]

    constructor() { }

    ngOnInit() { }

  comeFromPagination(event){
      console.log(event);
      this.adminLists=event
  }
}
