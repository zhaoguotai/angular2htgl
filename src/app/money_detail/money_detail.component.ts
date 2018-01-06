import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-money_detail',
    templateUrl: 'money_detail.component.html'
})

export class money_detailComponent implements OnInit {
    public moneyDetailUniqueCode:string="moneyDetail";
    public moneyDetailLists:Array<any>=[];
    public moneyDetailTheads:Array<any>=["ID","用户ID","标题","类型","金额","收入来源","时间"]
    constructor() { }

    ngOnInit() { }
  comeFromPagination(event){
      console.log(event);
      this.moneyDetailLists=event;
  }
}
