import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ClientesListComponent } from './clientes-list/clientes-list.component'


@NgModule({
  declarations: [
    FormComponent,
    ClientesListComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule, 
    FormsModule
  ], exports: [
    FormComponent,
    ClientesListComponent
  ]
})
export class ClientesModule { }
