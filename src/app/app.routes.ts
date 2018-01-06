import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {loginComponent} from './login/login.component';
import{indexComponent} from "./index/index.component";
import {mainComponent} from "./main/main.component";
import {memberComponent} from "./member/member.component";
import {produceComponent} from "./produce/produce.component";
import {adminComponent} from "./admin/admin.component";
import {admin_nodeComponent} from "./admin_node/admin_node.component";
import {admin_powerComponent} from "./admin_power/admin_power.component";
import {money_detailComponent} from "./money_detail/money_detail.component";
import {money_manageComponent} from "./money_manage/money_manage.component"
import {orderComponent} from "./order/order.component";
import {system_configComponent} from "./system_config/system_config.component";
import {system_dictionaryComponent} from "./system_dictionary/system_dictionary.component";
import {system_focusComponent} from "./system_focus/system_focus.component";
import {system_keywordComponent} from "./system_keyword/system_keyword.component";



const routes: Routes = [
 {path:'login',component:loginComponent},

  // {path:'home', component:HomeComponent},
 {path:'index',component:indexComponent,children:[
   {path:"main",component:mainComponent},
   {path:'member',component:memberComponent},
   {path:'produce',component:produceComponent,children:[
    //  {path:"addNewPro",component:addNewProComponent}
   ]},
   {path:"admin",component:adminComponent},
   {path:'admin_node',component:admin_nodeComponent},
   {path:'admin_power',component:admin_powerComponent},
   {path:'money_detail',component:money_detailComponent},
   {path:'money_manage',component:money_manageComponent},
   {path:"order",component:orderComponent},
   {path:'system_config',component:system_configComponent},
   {path:'system_dictionary',component:system_dictionaryComponent},
   {path:"system_focus",component:system_focusComponent},
   {path:"system_keyword",component:system_keywordComponent},
   // {path:'',redirectTo:'/main',pathMatch:'full'}
   ]},
 {path:'',redirectTo:'/index/main',pathMatch:'full'},
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class MyRoutingModule { }
export const Routing = RouterModule.forRoot(routes);





