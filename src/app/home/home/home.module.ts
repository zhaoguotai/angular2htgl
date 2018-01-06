import { NgModule } from '@angular/core';

import { HomeComponent }   from './home.component';
import { routing } from './about.routing';

@NgModule({
  imports: [routing],
  declarations: [HomeComponent],
  providers:[]
})
export default class AboutModule { }


/**
 * 引入routing文件
 */


