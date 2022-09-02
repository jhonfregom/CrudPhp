import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
@NgModule({
  declarations: [],
  imports: [
    
  ],
  exports:[
    CascadeSelectModule,
    TableModule,
    ButtonModule,
    InputTextModule

  ]
})
export class PrimeNgModule { }
