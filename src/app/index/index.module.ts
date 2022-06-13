import { NavbarModule } from './../navbar/navbar.module';
import { NavbarComponent } from './../navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  exports: []
})
export class IndexModule { }
