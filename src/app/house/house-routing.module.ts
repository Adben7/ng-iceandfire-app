import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { HouseListComponent } from './components/house-list/house-list.component';

const routes: Routes = [

  { path: '', component: HouseListComponent },
  { path: ':id', component: HouseDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
