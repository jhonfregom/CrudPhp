import { HttpClient,HttpHeaders  } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { Detalle } from '../model/detalle';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http:HttpClient) {

  }
 baseUrl = environment.baseUrl

  
 detalleRegister(cargar:any){
  return this.http.post(`${this.baseUrl}/registerDetalle.php`, cargar, );
  }

  getProductos(){
  return this.http.get<Producto[]>(`${this.baseUrl}/getProducto.php`);
    }


    getDetallefactura(){
        return this.http.get<any[]>(`${this.baseUrl}/getdetalle-factura.php`);
       
    }

    deleteDetalle(detalle: Detalle) {
      return this.http.delete(`${this.baseUrl}/delete.php?idDetalle=${detalle.id_detalle}`);
    }
    


}
