import {Component, Input, OnInit} from '@angular/core';
import {ProduceShareService} from "../share/produce-share.service";
@Component({
    moduleId: module.id,
    selector: 'my-produce',
    templateUrl: 'produce.component.html'
})
export class produceComponent implements OnInit {
  public produceJson:Array<any>;
    public produceThead:Array<any>=["ID","产品名","类型","创建时间","排序","操作"]
    public producePageUniqueCode:string='produce'
    constructor(

    ) {
    }


  // produceJson=[
  //   {pid:1,pName:"屁颠虫麦克风1",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:2,pName:"屁颠虫麦克风2",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:3,pName:"屁颠虫麦克风3",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:4,pName:"屁颠虫麦克风4",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:5,pName:"屁颠虫麦克风5",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:6,pName:"屁颠虫麦克风6",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:7,pName:"屁颠虫麦克风7",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:8,pName:"屁颠虫麦克风9",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:9,pName:"屁颠虫麦克风0",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:10,pName:"屁颠虫麦克风11",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:11,pName:"屁颠虫麦克风12",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:12,pName:"屁颠虫麦克风13",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:13,pName:"屁颠虫麦克风14",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:14,pName:"屁颠虫麦克风15",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:15,pName:"屁颠虫麦克风16",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:16,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:17,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:18,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:19,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:20,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:21,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:22,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:23,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:24,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:25,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:26,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:27,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:28,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:29,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:30,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:31,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:32,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:33,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:34,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:35,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:36,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:37,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:38,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true},
  //   {pid:39,pName:"屁颠虫麦克风",pDirector:"屁颠虫音响",pCreatTime:"2016-12-02 10：32：24",pSort:"1",selectColor:false,online:true}
  // ]
    public showBoolean=false;//用来控制子页面显示与否
    public produces=[];//用来保存第N页面需要显示的数据
    public inputPageValte=1;//input的value值
    public pageAmount:number=10;
    addPro(){
        this.showBoolean=true;
    }
  comeFromPagination(event:Array<any>){
    this.produces=event;
  }
    //设置添加产品页面全屏或者非全屏
    fullScreenCheck:boolean=true;
    fullScreenCheck2:boolean=false
    closeAddPro(){
        this.showBoolean=false;
        this.fullScreenCheck=true;
        this.fullScreenCheck2=false
    }
    //设置产品上下架

    // proDown(index){
    //   // console.log(index)
    //   this.produceJson[index].online=!this.produceJson[index];
    //
    // }





    // childChange($event){
    //   console.log($event)
    // }


    //设置分页，每一页显示的数据
    // pagination(producesLists,pageAmount,g){
    //     //producesLists为json数组,n为一个页面需要显示的数量,g为显示哪一页.
    //     let i=producesLists.length;
    //     this.toggleProNum=i
    //     let j=Math.ceil(i/pageAmount);
    //     this.pageNum=j;
    //     let producePages=[];
    //     // console.log(j)
    //     for(let n=0;n<j;n++){
    //         producePages.push(producesLists.slice(n*pageAmount,(n+1)*pageAmount))
    //     }
    //     return producePages[g-1]
    // }
    // //改变产品列表内容
    // changeList(i){
    //     if(this.pageNum>=i&&i>=1){
    //         this.produces=this.pagination(this.produceJson,this.pageAmount,i);
    //         this.inputPageValte=i;
    //     }
    // }
    //点击产品时的事件

    // proClick(index){
    //      for(let produce of this.produces){
    //          produce.selectColor=false
    //         //  console.log(produce)
    //      }
    //      this.produces[index].selectColor=true
    // }
    //点击到第一页或者最后一页
    // goToLimit(i){
    //     this.produces=this.pagination(this.produceJson,this.pageAmount,i);
    //     this.inputPageValte=i
    // }

    fullScreen(){
        if(this.fullScreenCheck){
            $(".publicArticle").css({
            padding:0
        })
        }else{
            $(".publicArticle").css({
            padding:"3%"
        })
        }
        this.fullScreenCheck=!this.fullScreenCheck
        this.fullScreenCheck2=!this.fullScreenCheck2
    }
    //显示第一页面数据
    ngOnInit() {
        // this.produces=this.pagination(this.produceJson,this.pageAmount,1);
    }


    //改变一页需要显示的数量
    // changeAmount(e){
    //     this.pageAmount=e.target.value
    //     this.produces=this.pagination(this.produceJson,this.pageAmount,1)
    // }


    //判断是否有被选中项
    noneChecked:boolean=false;
    produceIndex:number; //用来保存产品的下标
    checkSelected(){
        // for(let produce of this.produces){
        //     if(produce.selectColor==true){
        //         // console.log(111)
        //         return true;
        //     }
        // }
        for(let i=0;i<this.produces.length;i++){
          if(this.produces[i].selectColor==true){
            this.produceIndex=i;
            return true
          }
        }
        return false;
    }
    modifyProduce(){
        var bool=this.checkSelected()
        if(!bool){
            this.noneChecked=true;
            setTimeout(function(){
                this.noneChecked=false;
            }.bind(this),2000)
        }

    }
    // 展示是否删除模态框
    showDeleteConfirm:boolean=false;
    deleteProduce(){
        var bool=this.checkSelected()
        if(!bool){
            this.noneChecked=true;
            setTimeout(function(){
                this.noneChecked=false;
            }.bind(this),2000)
        }else{
          this.showDeleteConfirm=true;
        }
    }
    closeConfirm(){
      this.showDeleteConfirm =false;
      this.showtoggleOff=false;
    }
    deleteProduceSure(){
      var index=(this.inputPageValte-1)*this.pageAmount+this.produceIndex
      this.produceJson.splice(index,1)
      // this.produces=this.pagination(this.produceJson,this.pageAmount,this.inputPageValte);
      this.showDeleteConfirm =false;
      console.log(index)
    }
    //展示是否下架模态框
    showtoggleOff:boolean=false;
    producePid:number;
    proDown(index){
      // console.log(index)
      this.producePid=index;
      this.showtoggleOff=true
      // this.produceJson[index-1].online=!this.produceJson[index-1];
    }
    toggleOffConfirmConcel(){
      this.showtoggleOff=false;
    }
    showtoggleOn:boolean=false
    toggleOffProduceSure(){
      this.showtoggleOff=false;
      // this.showtoggleOn=true;
      this.produces[this.producePid].online=!this.produces[this.producePid].online;
    }
    modifySort(){
        $(".modifySort").show();
    }
    closeSort(){
        $(".modifySort").hide();
    }











}
