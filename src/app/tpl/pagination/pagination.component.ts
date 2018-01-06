import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Produce, ProduceShareService} from "../../share/produce-share.service";


//说明：
//1,用户只需要将从数据库里获得的数据传入到服务中share/produce-share.service.ts中
//2.然后在这个服务中的getProduces()中加入唯一的uniqueCode，这个对应键，值是自己写的，这个键需要在对面的组件中声明。
//比如在produce.component中public producePageUniqueCode:string='produce';对应服务中的键；
//3.然后在<app-pagination [UniqueCode]="producePageUniqueCode"(produceFromPagination)="comeFromPagination($event)">
//设置UniqueCode，这便是父=》子组件之间的传值。
//然后在父组件中定义函数comeFromPagination(event)，便可以获得从分页发射出来的数据




@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input()
  UniqueCode:string;

  @Output()
  produceFromPagination:EventEmitter<any>=new EventEmitter()

  public produceJson:Array<any>;
  public produces=[];//用来保存第N页面需要显示的数据
  public pageNum ;//设置分页的数量
  public inputPageValte=1;//input的value值
  public toggleProNum:number;//设置一共有多少条数据
  public pageAmount:number=10;
  constructor(
    private productFromService:ProduceShareService,

  ) {

    // console.log(this.produceJson)
  }

  ngOnInit() {

    this.produceJson=this.productFromService.getProduces()[this.UniqueCode];
    // console.log(this.produceJson);
    this.produces=this.pagination(this.produceJson,this.pageAmount,1);
    this.produceFromPagination.emit(this.produces);//将数据发射出去
  }
  //设置分页，每一页显示的数据
  pagination(producesLists,pageAmount,g){
    //producesLists为json数组,n为一个页面需要显示的数量,g为显示哪一页.
    let i=producesLists.length;
    this.toggleProNum=i;
    let j=Math.ceil(i/pageAmount);
    this.pageNum=j;
    let producePages=[];
    // console.log(j)
    for(let n=0;n<j;n++){
      producePages.push(producesLists.slice(n*pageAmount,(n+1)*pageAmount))
    }
    return producePages[g-1]
  }
  //改变产品列表内容
  changeList(i){
    if(this.pageNum>=i&&i>=1){
      this.inputPageValte=i;
      this.produces=this.pagination(this.produceJson,this.pageAmount,i);
      this.produceFromPagination.emit(this.produces);
    }
  }


  //点击到第一页或者最后一页
  goToLimit(i){
    this.inputPageValte=i;
    this.produces=this.pagination(this.produceJson,this.pageAmount,i);
    this.produceFromPagination.emit(this.produces);
  }


  changeAmount(e){
    this.pageAmount=e.target.value;
    this.produces=this.pagination(this.produceJson,this.pageAmount,1);
    this.produceFromPagination.emit(this.produces);
  }
}
