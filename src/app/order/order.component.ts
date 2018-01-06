import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-order',
    templateUrl: 'order.component.html'
})

export class orderComponent implements OnInit {
    public orderLists:Array<any>=[];
    public orderPageUniqueCode:string='order';
    public orderTheads:Array<any>=["ID","订单编号","用户名","总价(排序)","状态","操作"];
    constructor() { }

    ngOnInit() { }
    comeFromPagination(event){
      // console.log(event);
      this.orderLists=event;
  }
}
