import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {flyIn} from "../animations/flyIn";


@Component({
    moduleId: module.id,
    selector: 'myIndex',
    //styleUrls:['../../assets/css/index.css'],
    templateUrl: 'index.component.html',
    animations:[
      flyIn
    ]
})

export class indexComponent implements OnInit {

    constructor(public router:Router) {

     }
     navbarTabs:Array<any>=[
         {name:"首页",routerUrl:"/index/main",className:true,showClose:false}

     ]

    navbarLists =[
         //{nav_header:"首页",icon:"fa-home",routerLink:"/index/main",},
        {nav_header:"会员管理",icon:"fa-users",routerLink:"",nav_child:[{href:"/index/member",nav_child_name:"会员管理"}]},
        {nav_header:"产品管理",icon:"fa-navicon",routerLink:"",nav_child:[{href:"/index/produce",nav_child_name:"产品"}]},
        {nav_header:"订单管理",icon:"fa-file-text-o",routerLink:"",nav_child:[{href:"/index/order",nav_child_name:"查看订单"}]},
        {nav_header:"财务管理",icon:"fa-book",routerLink:"",nav_child:[{href:"/index/money_manage",nav_child_name:"提现管理"},{href:"/index/money_detail",nav_child_name:"资金明细"}]},
        {nav_header:"权限管理",icon:"fa-cubes",routerLink:"",nav_child:[{href:"/index/admin",nav_child_name:"管理员"},{href:"/index/admin_power",nav_child_name:"权限组"},{href:"/index/admin_node",nav_child_name:"权限节点"}]},
        {nav_header:"系统管理",icon:"fa-cogs",routerLink:"",nav_child:[{href:"/index/system_keyword",nav_child_name:"系统关键字"},{href:"/index/system_focus",nav_child_name:"焦点图"},{href:"/index/system_dictionary",nav_child_name:"数据字典"},{href:"/index/system_config",nav_child_name:"站点参数配置"}]}
    ]
    showList:boolean=false;
    // TabsLists=[
    //     {title:"首页",href:'/index'},
    //     {title:"会员管理",href:"member"},
        // {title:"产品订单",href:"produce"},
        // {title:"查看订单",href:"order"},
        // {title:"提现管理",href:"money_manage"},
        // {title:"资金明细",href:"moneyDetail"},
        // {title:"管理员",href:"admin"},
        // {title:"权限组",href:"admin_power"},
        // {title:"权限节点",href:"admin_node"},
        // {title:"系统关键字",href:"system_keyword"},
        // {title:"焦点图",href:'system_focus'},
        // {title:"数据字典",href:"system_dictionary"},
        // {title:"站点参数配置",href:"system_config"}
        // ]

    // addToTabs(title){

    //    console.log(title)

    // }
    showTabs(name,href){
        let checked:number=1;
        let arr:object={name:name,routerUrl:href,className:true,showClose:true};
        let index:number;
        $("#section_nav_2 li:first").removeClass("active0");
        for(let i=0;i<this.navbarTabs.length;i++){

            this.navbarTabs[i].className=false
            // tab.className=false;
            if(this.navbarTabs[i].name==name){
                checked=2;
                index=i;
            }
        }
        if(checked==1){
            this.navbarTabs.push(arr)
        }else{
            this.navbarTabs[index].className=true;
        }

    }
    tabsChange(index){
        for(let tab of this.navbarTabs){
            tab.className=false;
        }
        this.navbarTabs[index].className=true
    }
    navbarChangeTabs(){
        for(let tab of this.navbarTabs){
            tab.className=false;
        }
        $("#section_nav_2 li:first").addClass("active0");
    }
    closeSection(index,currentUrl){
        let currentTabsUrl=this.navbarTabs[index].routerUrl;
        let obj=this.navbarTabs.splice(index,1);
        // console.log(index)
        let i=this.navbarTabs.length
        // console.log(i);

        // console.log(currentTabsUrl,currentUrl)
        if(index=i){
          // this.navbarTabs[index-1].className=true;
          // console.log(this.navbarTabs);
          this.router.navigateByUrl(this.navbarTabs[index-1].routerUrl)
        }

    }

    ngOnInit() {
        $("#navbar").on("mousedown",".collapse_title",function(){
            $(this).parent().siblings().removeClass("myCollapse active0")

        })
        $("#navbar").on("mouseup",".collapse_title",function(){

            $(this).parent().toggleClass("myCollapse active0")
        })
    }
}
