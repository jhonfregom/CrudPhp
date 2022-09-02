import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './facturacion/factura/factura.component';
import { PrimeNgModule } from './prime/prime-ng.module';
import { VerProductosComponent } from './facturacion/ver-productos/ver-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    FacturaComponent,
    VerProductosComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
