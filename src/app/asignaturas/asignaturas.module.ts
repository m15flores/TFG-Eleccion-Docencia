import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './asingaturas-routing';

// Módulo compartido con los componentes de Angular Material
import { MaterialModule } from '../material/material.module';

import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { AsignaturasListComponent } from './asignaturas-list/asignaturas-list.component';
import { HorarioComponent } from './horario/horario.component';
import { AsignaturaDetailsComponent } from './asignatura-details/asignatura-details.component';
import { AnadirAsignaturaComponent } from './anadir-asignatura/anadir-asignatura.component';
import { AsignaturasService } from './asignaturas.service';
import { ImportarAsignaturasComponent } from './importar-asignaturas/importar-asignaturas.component';
import { EliminarDialogComponent } from './eliminar-dialog/eliminar-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuToolbarComponent
  ],
  declarations: [
    MenuToolbarComponent,
    AsignaturasListComponent,
    HorarioComponent,
    AsignaturaDetailsComponent,
    AnadirAsignaturaComponent,
    ImportarAsignaturasComponent,
    EliminarDialogComponent
  ],
  providers: [AsignaturasService],
  entryComponents: [EliminarDialogComponent]
})
export class AsignaturasModule { }
