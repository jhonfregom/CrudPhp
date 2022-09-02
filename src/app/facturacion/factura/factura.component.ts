import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detalle } from 'src/app/model/detalle';
import { Factura }from 'src/app/model/factura';
import { Producto } from 'src/app/model/producto';
import { DatabaseService } from 'src/app/service/database.service';


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  producto!: Producto[];
 
  selectedq: Producto = {cod_producto: 3, descripcion: '', precio_unidad: 0};
  
  detalle: Detalle = new Detalle();
  total: number;

  constructor( private database: DatabaseService, 
    private router: Router){}

  ngOnInit(): void {
    this.getProductos();
    
 
  }
  getProductos(){
    this.database.getProductos()
   .subscribe(data => {
     this.producto = data;
   
     console.log(this.producto);
     
   });
  }

  regisDetalle(detalle: Detalle){
    this.detalle.cod_producto;
    this.detalle.cantidad;
   var cargar =  Object.assign(this.detalle,this.detalle.cod_producto);
   console.log(cargar);
   
    this.database.detalleRegister(cargar)
    .subscribe(data=>{
     alert("Producto agregado..!!!");
    window.location.reload()
    })
  }

}