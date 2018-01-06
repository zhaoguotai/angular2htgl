import { Component, OnInit } from '@angular/core';
import {flyIn} from "../animations/flyIn";

@Component({
    moduleId: module.id,
    selector: 'my-admin_power',
    templateUrl: 'admin_power.component.html',
    animations:[
      flyIn
    ]
})
export class admin_powerComponent implements OnInit {
  public adminPowerLists:Array<any>=[];
  public adminPowerUniqueCode:string='adminPower';
    constructor() { }

    ngOnInit() { }

  comeFromPagination(event){
      console.log(event);
      this.adminPowerLists=event;
  }
}
