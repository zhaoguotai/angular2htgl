import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-system_keyword',
    templateUrl: 'system_keyword.component.html'
})

export class system_keywordComponent implements OnInit {
    public systemKeywordLists:Array<any>=[];
    public systemKeywordUniqueCode:string= 'systemKeyword'
    constructor() { }

    ngOnInit() { }
  comeFromPagination(event){
      console.log(event);
      this.systemKeywordLists=event
  }
}



