import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Detalle } from 'src/app/model/detalle';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent implements OnInit {

  detalles : Detalle[];
  total:string;
  constructor(private database: DatabaseService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getDetalle();
  }


  getDetalle(){
    this.database.getDetallefactura()
   .subscribe(data => {
     this.detalles = data
     console.log(data);
   });
 }


 delete(detalle:Detalle){
  if(confirm("Estas seguro que deseas borrar el producto?")){
  this.database.deleteDetalle(detalle)
  .subscribe(data=>{
    this.detalles=this.detalles.filter(p=>p!==detalle);
    alert("Producto eliminado...");
  })
}
}

facturar(){
/*
  this.database.updateFactura(this.getDetalle).subscribe(data=>{
    console.log(this.getDetalle);
    alert("Se Actualizado con Exito...!!!");
    this.router.navigate(["listar"]);
   
  });

  this.database.getDetallefactura()
  .subscribe(data => {
    this.detalles = data
    console.log(data);

  });
*/
}

}
