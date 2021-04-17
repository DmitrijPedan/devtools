import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home.component';
import { EmbedPageComponent } from './pages/embed/embed.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'embed', component: EmbedPageComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
