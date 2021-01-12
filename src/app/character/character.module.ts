import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { SerchComponent } from '../sharedComponent/serch/serch.component';
import { SharedComponentModule } from '../sharedComponent/shared-component.module';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
