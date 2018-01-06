import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-money_manage',
    templateUrl: 'money_manage.component.html'
})

export class money_manageComponent implements OnInit {
    moneyManageLists:Array<any>;
    moneyManageUniqueCode:string ="moneyManage";
    moneyManageTheads:Array<any>=["ID","用户ID","提现金额","提现时间","微信账号","提现状态"]
    constructor() { }

    ngOnInit() {

    }
  comeFromPagination(event){
      console.log(event)
    this.moneyManageLists=event
  }
}
