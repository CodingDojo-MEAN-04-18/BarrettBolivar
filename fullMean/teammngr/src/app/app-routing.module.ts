import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { KappaComponent } from './kappa/kappa.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AlphaComponent },
  { path: 'players/addPlayer', component: BetaComponent },
  { path: 'status/game/1', component: KappaComponent },
  { path: 'status/game/2', component: KappaComponent },
  { path: 'status/game/3', component: KappaComponent },
  { path: 'gohome', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
