import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {HttpService} from "./http.service";


@Injectable()
export class ProduceShareService {
  private product:Produce;
  private produces:Array<any>=[
    new Produce(1,"屁颠虫麦克风1","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(2,"屁颠虫麦克风2","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(3,"屁颠虫麦克风3","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(4,"屁颠虫麦克风4","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(5,"屁颠虫麦克风5","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(6,"屁颠虫麦克风6","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(7,"屁颠虫麦克风7","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(8,"屁颠虫麦克风8","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(9,"屁颠虫麦克风9","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(10,"屁颠虫麦克风10","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(11,"屁颠虫麦克风11","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(12,"屁颠虫麦克风12","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(13,"屁颠虫麦克风13","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(14,"屁颠虫麦克风14","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(15,"屁颠虫麦克风15","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(16,"屁颠虫麦克风16","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(17,"屁颠虫麦克风17","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(18,"屁颠虫麦克风18","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
    new Produce(19,"屁颠虫麦克风19","屁颠虫音响","2016-12-02 10：32：24",1,false,true),
  ];

  private orderLists:Array<any>=[
    new OrderList(1,1234324234,"屁践1",22,"成交","删除"),
    new OrderList(2,1234324234,"屁践2",12,"成交","删除"),
    new OrderList(3,1234324234,"屁践3",142,"成交","删除"),
    new OrderList(4,1234324234,"屁践4",52,"成交","删除"),
    new OrderList(5,1234324234,"屁践5",62,"成交","删除"),
    new OrderList(6,1234324234,"屁践6",32,"成交","删除"),
    new OrderList(7,1234324234,"屁践7",22,"成交","删除"),
    new OrderList(8,1234324234,"屁践8",42,"成交","删除"),
    new OrderList(9,1234324234,"屁践9",252,"成交","删除"),
    new OrderList(10,1234324234,"屁践10",122,"成交","删除"),
    new OrderList(11,1234324234,"屁践11",232,"成交","删除"),
    new OrderList(12,1234324234,"屁践12",224,"成交","删除"),
    new OrderList(13,1234324234,"屁践13",226,"成交","删除"),
    new OrderList(14,1234324234,"屁践14",232,"成交","删除"),
    new OrderList(15,1234324234,"屁践15",224,"成交","删除"),
    new OrderList(16,1234324234,"屁践16",522,"成交","删除"),
    new OrderList(17,1234324234,"屁践17",212,"成交","删除"),
  ];
  private moneyManageLists:Array<any>=[
    new moneyManage(1,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(2,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(3,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(4,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(5,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(6,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(7,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(8,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(9,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(10,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(11,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(12,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(13,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(14,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(15,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(16,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(17,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功"),
    new moneyManage(18,"ID111",500.00,"2017-5-15 05:12:11","324234244","提现成功")
  ];

  private moneyDetailLists:Array<any>=[
    new moneyDetail(1,11223,"消费返利","收入",19.00,"来自用户101","2017-6-3 10:10:10"),
    new moneyDetail(2,11233,"消费返利","收入",19.00,"来自用户102","2017-6-3 10:10:10"),
    new moneyDetail(3,18123,"消费返利","收入",19.00,"来自用户103","2017-6-3 10:10:10"),
    new moneyDetail(4,11923,"消费返利","收入",19.00,"来自用户104","2017-6-3 10:10:10"),
    new moneyDetail(5,11203,"消费返利","收入",19.00,"来自用户105","2017-6-3 10:10:10"),
    new moneyDetail(6,11239,"消费返利","收入",19.00,"来自用户106","2017-6-3 10:10:10"),
    new moneyDetail(7,21123,"消费返利","收入",19.00,"来自用户107","2017-6-3 10:10:10"),
    new moneyDetail(8,13123,"消费返利","收入",19.00,"来自用户108","2017-6-3 10:10:10"),
    new moneyDetail(9,11423,"消费返利","收入",19.00,"来自用户109","2017-6-3 10:10:10"),
    new moneyDetail(10,11523,"消费返利","收入",19.00,"来自用户1010","2017-6-3 10:10:10"),
    new moneyDetail(11,112673,"消费返利","收入",19.00,"来自用户1011","2017-6-3 10:10:10"),
    new moneyDetail(12,11236,"消费返利","收入",19.00,"来自用户1012","2017-6-3 10:10:10"),
    new moneyDetail(13,17123,"消费返利","收入",19.00,"来自用户1013","2017-6-3 10:10:10"),
    new moneyDetail(14,11823,"消费返利","收入",19.00,"来自用户1014","2017-6-3 10:10:10"),
    new moneyDetail(15,11293,"消费返利","收入",19.00,"来自用户1015","2017-6-3 10:10:10"),
    new moneyDetail(16,31123,"消费返利","收入",19.00,"来自用户1016","2017-6-3 10:10:10"),
    new moneyDetail(17,14123,"消费返利","收入",19.00,"来自用户1017","2017-6-3 10:10:10"),
    new moneyDetail(18,11523,"消费返利","收入",19.00,"来自用户1018","2017-6-3 10:10:10"),
    ];

  private adminLists :Array<any>=[
    new admin(1,"xiatian","夏念旺","2017-1-1","192.21.1.1",true),
    new admin(2,"xiatian","夏念旺","2017-1-1","192.13.1.1",true),
    new admin(3,"xiatian","夏念旺","2017-1-1","192.1.41.1",true),
    new admin(4,"xiatian","夏念旺","2017-1-1","192.1.15.1",true),
    new admin(5,"xiatian","夏念旺","2017-1-1","192.1.1.61",true),
    new admin(6,"xiatian","夏念旺","2017-1-1","192.1.1.17",true),
    new admin(7,"xiatian","夏念旺","2017-1-1","192.12.1.1",true),
    new admin(8,"xiatian","夏念旺","2017-1-1","192.1.31.1",true),
    new admin(9,"xiatian","夏念旺","2017-1-1","192.1.14.1",true),
    new admin(10,"xiatian","夏念旺","2017-1-1","192.1.156.1",true),
    new admin(11,"xiatian","夏念旺","2017-1-1","192.1.1.16",true),
    new admin(12,"xiatian","夏念旺","2017-1-1","192.12.1.1",true),
    new admin(13,"xiatian","夏念旺","2017-1-1","192.1.31.1",true),
    new admin(14,"xiatian","夏念旺","2017-1-1","192.1.14.1",true),
    new admin(15,"xiatian","夏念旺","2017-1-1","192.1.1.51",true),
    new admin(16,"xiatian","夏念旺","2017-1-1","192.1.1.16",true),
    new admin(17,"xiatian","夏念旺","2017-1-1","192.16.1.1",true),
    new admin(18,"xiatian","夏念旺","2017-1-1","192.1.71.1",true),
    new admin(19,"xiatian","夏念旺","2017-1-1","192.1.18.1",true),
    new admin(20,"xiatian","夏念旺","2017-1-1","192.1.1.91",true),
    new admin(21,"xiatian","夏念旺","2017-1-1","192.1.1.19",true),


  ];


  private adminPowerLists:Array<any>=[
    new adminPower(1,"运营","运营","admin","正常"),
    new adminPower(2,"运营","运营","admin","正常"),
    new adminPower(3,"运营","运营","admin","正常"),
    new adminPower(4,"运营","运营","admin","正常"),
    new adminPower(5,"运营","运营","admin","正常"),
    new adminPower(6,"运营","运营","admin","正常"),
    new adminPower(7,"运营","运营","admin","正常"),
    new adminPower(8,"运营","运营","admin","正常"),
    new adminPower(9,"运营","运营","admin","正常"),
    new adminPower(10,"运营","运营","admin","正常"),
    new adminPower(11,"运营","运营","admin","正常"),
    new adminPower(12,"运营","运营","admin","正常"),
    new adminPower(13,"运营","运营","admin","正常"),
    new adminPower(14,"运营","运营","admin","正常"),
    new adminPower(15,"运营","运营","admin","正常"),
    new adminPower(16,"运营","运营","admin","正常"),
    new adminPower(17,"运营","运营","admin","正常"),
    new adminPower(18,"运营","运营","admin","正常")
    ];


  private systemKeywordLists:Array<any>=[
    new systemKeyword(1,"音响","2017-3-4 10:10:10"),
    new systemKeyword(2,"音响","2017-3-4 10:10:10"),
    new systemKeyword(3,"音响","2017-3-4 10:10:10"),
    new systemKeyword(4,"音响","2017-3-4 10:10:10"),
    new systemKeyword(5,"音响","2017-3-4 10:10:10"),
    new systemKeyword(6,"音响","2017-3-4 10:10:10"),
    new systemKeyword(7,"音响","2017-3-4 10:10:10"),
    new systemKeyword(8,"音响","2017-3-4 10:10:10"),
    new systemKeyword(9,"音响","2017-3-4 10:10:10"),
    new systemKeyword(10,"音响","2017-3-4 10:10:10"),
    new systemKeyword(11,"音响","2017-3-4 10:10:10"),
    new systemKeyword(12,"音响","2017-3-4 10:10:10"),
    new systemKeyword(13,"音响","2017-3-4 10:10:10"),
    new systemKeyword(14,"音响","2017-3-4 10:10:10"),
    new systemKeyword(15,"音响","2017-3-4 10:10:10"),
    new systemKeyword(16,"音响","2017-3-4 10:10:10")
  ];

  private systemKeywordMainLists:Array<any>=[
    new systemKeywordMain(1,"电子玩具","2017-4-5 12:1:2"),
    new systemKeywordMain(2,"电子玩具","2017-4-5 12:1:2"),
    new systemKeywordMain(3,"电子玩具","2017-4-5 12:1:2"),
    new systemKeywordMain(4,"电子玩具","2017-4-5 12:1:2"),
    new systemKeywordMain(5,"电子玩具","2017-4-5 12:1:2"),
    new systemKeywordMain(6,"电子玩具","2017-4-5 12:1:2"),
    new systemKeywordMain(7,"电子玩具","2017-4-5 12:1:2"),
    new systemKeywordMain(8,"电子玩具","2017-4-5 12:1:2"),
    new systemKeywordMain(9,"电子玩具","2017-4-5 12:1:2"),
    new systemKeywordMain(10,"电子玩具","2017-4-5 12:1:2"),
    new systemKeywordMain(11,"电子玩具","2017-4-5 12:1:2"),
    new systemKeywordMain(12,"电子玩具","2017-4-5 12:1:2"),
  ];

  private systemKeywordSecondLists:Array<any>=[
    new systemKeywordSecond(1,"汽车玩具",3001,"2015-3-2-1 12:1:1",2),
    new systemKeywordSecond(2,"汽车玩具",3001,"2015-3-2-1 12:1:1",2),
    new systemKeywordSecond(3,"汽车玩具",3001,"2015-3-2-1 12:1:1",2),
    new systemKeywordSecond(4,"汽车玩具",3001,"2015-3-2-1 12:1:1",2),
    new systemKeywordSecond(5,"汽车玩具",3001,"2015-3-2-1 12:1:1",2),
    new systemKeywordSecond(6,"汽车玩具",3001,"2015-3-2-1 12:1:1",2),
    new systemKeywordSecond(7,"汽车玩具",3001,"2015-3-2-1 12:1:1",2),
    new systemKeywordSecond(8,"汽车玩具",3001,"2015-3-2-1 12:1:1",2),
    new systemKeywordSecond(9,"汽车玩具",3001,"2015-3-2-1 12:1:1",2),
    new systemKeywordSecond(10,"汽车玩具",3001,"2015-3-2-1 12:1:1",2),
    new systemKeywordSecond(11,"汽车玩具",3001,"2015-3-2-1 12:1:1",2),
    new systemKeywordSecond(12,"汽车玩具",3001,"2015-3-2-1 12:1:1",2),
    new systemKeywordSecond(13,"汽车玩具",3001,"2015-3-2-1 12:1:1",2)

  ];

  private systemConfigLists:Array<any>=[
    new systemConfig(1,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(2,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(3,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(4,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(5,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(6,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(7,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(8,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(9,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(10,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(11,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(12,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(13,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
    new systemConfig(14,"app_consume_three_return_rate","65465464","如0.05代表下下下家充值100元您有5元返现）"),
  ];





  constructor(
    private http :Http,
    private httpService:HttpService

  ) { }
  getProduces(){
    // console.log('mock')
    // let orderLists = this.http.get('http://rapapi.org/mockjs/20823/adminManage/order?accessToken=kaykie').subscribe(function(data){
    //   console.log(data)
    // });
    //向服务器请求数据
   // let orderList = this.httpService.httpGet('http://rapapi.org/mockjs/20823/adminManage/order?accessToken=kaykie','').subscribe(res => console.log(res));
    return {produce:this.produces,order:this.orderLists,moneyManage:this.moneyManageLists,moneyDetail:this.moneyDetailLists,admin:this.adminLists,adminPower:this.adminPowerLists,systemKeyword:this.systemKeywordLists,
      systemKeywordMain:this.systemKeywordMainLists,systemKeywordSecond:this.systemKeywordSecondLists,systemConfig:this.systemConfigLists
    }
    // return [this.produces,this.orderLists]
  }
}

export class Produce{
  constructor(
    public id:number,
    public pName:string,
    public pDirector:string,
    public pCreatTime:string,
    public pSort:number,
    public selectColor:boolean,
    public online:boolean
  ){}
}
export class OrderList{
  constructor(
    public id:number,
    public orderIdNumber:number,
    public orderUname:string,
    public orderPrice:number,
    public orderState:string,
    public orderHandle:string


  ){}
}


export class moneyManage{
  constructor(
    public id:number,
    public mname :string,
    public cash:number,
    public cashTime:string,
    public wechat:string,
    public moneyState:string
  ){}
}


export class moneyDetail{
  constructor(
    public id:number,
    public userId:number,
    public moneyDetailTitle:string,
    public moneyDetailType:string,
    public moneyDetailNumber:number,
    public moneyDetailFrom:string,
    public moneyDetailTime:string
  ){}
}

export class admin{
  constructor(
    public id:number,
    public uname:string,
    public realName:string,
    public lastEntryTime:string,
    public lastEntryIp:string,
    public handle:boolean
  ){}
}

export class adminPower{
  constructor(
    public id :number,
    public groupName:string,
    public desc:string,
    public belongModule:string,
    public state:string
  ){}
}

export class systemKeyword{
  constructor(
    public id :number,
    public keyword:string,
    public creatTime:string
  ){}
}

export class systemKeywordMain{
  constructor(
    public id :number,
    public mainName:string,
    public creatTime:string
  ){}
}

export class systemKeywordSecond{
  constructor(
    public id:number,
    public secondName:string,
    public identify:number,
    public creatTime:string,
    public sort:number
  ){}
}


export class systemConfig{
  constructor(
    public id :number,
    public wordSegment :string,
    public value:string,
    public intr:string
  ){}
}











