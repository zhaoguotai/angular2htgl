import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-system_dictionary',
    templateUrl: 'system_dictionary.component.html'
})

export class system_dictionaryComponent implements OnInit {
    public systemKeywordSecondLists:Array<any>=[];
    public systemKeywordSecondUniqueCode:string="systemKeywordSecond";
    public systemKeywordMainLists:Array<any>=[];
    public systemKeywordMainUniqueCode:string="systemKeywordMain"
    constructor() { }

    ngOnInit() { }
  comeFromPaginationMain(event){
      console.log(event);
      this.systemKeywordMainLists=event;
  }
  comeFromPaginationSecond(event){
      console.log(event);
      this.systemKeywordSecondLists=event
  }
}
