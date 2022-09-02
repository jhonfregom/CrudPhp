import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime/prime-ng.module';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { NgModule } from '@angular/core';
import { VerProductosComponent } from './ver-productos/ver-productos.component';


@NgModule({
    declarations: [
      
    
    
  ],
    imports: [
    
      ReactiveFormsModule,
      PrimeNgModule,
      CascadeSelectModule,
      
    ],
    exports:[
      
    ],
  
  })
  export class PanelModule { }
  