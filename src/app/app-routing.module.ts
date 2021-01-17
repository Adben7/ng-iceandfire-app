import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'books', loadChildren: () => import('./book/book.module').then( m => m.BookModule)},
  { path: 'characters', loadChildren: () => import('./character/character.module').then( m => m.CharacterModule)},
  { path: 'houses', loadChildren: () => import('./house/house.module').then( m => m.HouseModule)},
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
