import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-system_config',
    templateUrl: 'system_config.component.html'
})

export class system_configComponent implements OnInit {
  public systemConfigLists:Array<any>=[];
  public systemConfigUniqueCode:string= "systemConfig";
    constructor() { }

    ngOnInit() { }
  comeFromPagination(event){
      console.log(event);
      this.systemConfigLists=event;
  }
}
