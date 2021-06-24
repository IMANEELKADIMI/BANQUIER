import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreneauRoutingModule } from './Creneau-routing.module';
import { CreneauListComponent } from './components/Creneau-list/Creneau-list.component';
import { CreneauFormComponent } from './components/Creneau-form/Creneau-form.component';
import { RendezVousItemComponent } from './components/RendezVous-item/RendezVous-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreneauListComponent,
    CreneauFormComponent,
    RendezVousItemComponent,
  ],
  imports: [CommonModule, CreneauRoutingModule, SharedModule],
})
export class CreneauModule {}
