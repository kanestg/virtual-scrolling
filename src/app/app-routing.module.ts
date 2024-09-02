import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualComponent } from './virtual/virtual.component';

const routes: Routes = [
  { path: '', redirectTo: '/virtual', pathMatch: 'full' },
  { path: 'virtual', component: VirtualComponent },
  { path: '**', component: VirtualComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
