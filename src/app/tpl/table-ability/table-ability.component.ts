import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Produce} from "../../share/produce-share.service";

//这里需要从外部获取两个参数，第一个是thead的参数，第二个数据也是需要从父组件中传递过来，这便是
// 父组件作为中间人模式的作用，pagin组件先将数据发射出来，父组件接收，其它子组件通过属性绑定的方式获得从父组件中获得数据；


@Component({
  selector: 'app-table-ability',
  templateUrl: './table-ability.component.html',
  styleUrls: ['./table-ability.component.css']
})
export class TableAbilityComponent implements OnInit{
  @Input()
  comeFromPaginLists: Array<any>;
  @Input()
  comeFromParentTheads: Array<any>;
  @Output()
  sortFromTable:EventEmitter<any> = new EventEmitter();

  constructor() {
  }


  //排序
  sortBy(i){
    console.log(i);
    if(i===3){
      console.log(this.comeFromPaginLists);
      let newArray = this.comeFromPaginLists.sort(this.compare('orderPrice'))
      // console.log(newArray)
    }
  }
  compare(property){
    return function (a, b) {
      let value1 = a[property];
      let value2 = b[property];
      return value1 - value2
    }
  }

  clickColor:Array<boolean>=[];
  ngOnInit() {
  }
  proClick(index) {
    if(this.clickColor.length===0){
      for(let i=0;i<this.comeFromPaginLists.length;i++){
        this.clickColor.push(false);
      }
    }else{
      for(let i=0;i<this.comeFromPaginLists.length;i++){
        this.clickColor[i]=false
      }
    }
    this.clickColor[index]=true;
  }
  public selectedIndex:number;
  checkSelected(){
    for(let i=0;i<this.clickColor.length;i++){
      if(this.clickColor[i]===true){
        this.selectedIndex=i;
        return this.selectedIndex;
      }
    }
    return false;
  }
}


