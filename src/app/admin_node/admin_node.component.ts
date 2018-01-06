import { Component, OnInit } from '@angular/core';
import {flyIn} from "../animations/flyIn";

@Component({
    moduleId: module.id,
    selector: 'my-admin_node',
    templateUrl: 'admin_node.component.html',
    animations:[
      flyIn
    ]
})
export class admin_nodeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
