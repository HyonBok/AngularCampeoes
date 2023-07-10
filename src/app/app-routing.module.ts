import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampeoesComponent } from './campeoes/campeoes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CampeaoDetailComponent } from './campeao-detail/campeao-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'campeoes', component: CampeoesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CampeaoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }