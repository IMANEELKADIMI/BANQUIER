import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './client/components/client-list/client-list.component';
import { LoginComponent } from './authentification/components/login/login.component';
import { ClientFormComponent } from './client/components/client-form/client-form.component';
import { AccountListComponent } from './account/components/account-list/account-list.component';
import { AccountFormComponent } from './account/components/account-form/account-form.component';
import { CreneauListComponent } from './Creneau/components/Creneau-list/Creneau-list.component';
import { CreneauFormComponent } from './Creneau/components/Creneau-form/Creneau-form.component';
import { AuthGuardService } from './authentification/services/auth-guard.service';
import { RendezVousItemComponent } from './Creneau/components/RendezVous-item/RendezVous-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'clients',
    component: ClientListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'clientForm',
    component: ClientFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'client/:id/accounts',
    component: AccountListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'client/:id/accountForm',
    component: AccountFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Creneau',
    component: CreneauListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'creneauForm',
    component: CreneauFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Rendez_Vous',
    component: RendezVousItemComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
