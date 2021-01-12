import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseRoutingModule } from './house-routing.module';
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { SharedComponentModule } from '../sharedComponent/shared-component.module';


@NgModule({
  declarations: [
    HouseListComponent,
    HouseDetailComponent
  ],
  imports: [
    CommonModule,
    HouseRoutingModule,
    SharedComponentModule
  ]
})
export class HouseModule { }
