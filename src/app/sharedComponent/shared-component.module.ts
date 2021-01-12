import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentRoutingModule } from './shared-component-routing.module';
import { SerchComponent } from './serch/serch.component';


@NgModule({
  declarations: [SerchComponent],
  exports:[SerchComponent],
  imports: [
    CommonModule,
    SharedComponentRoutingModule
  ]
})
export class SharedComponentModule { }
