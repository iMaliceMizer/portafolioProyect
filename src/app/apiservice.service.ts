import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //conectar frontend con el backend!

  apiUrl = 'http://localhost:3000/producto/';
  apiUrl1 = 'http://localhost:3000/pedido/';
  apiUrl2 = 'http://localhost:3000/mesa/:id';

  // obtener todos los datos
getAllData():Observable<any>
  {
        return this._http.get(`${this.apiUrl}`);
        return this._http.get(`${this.apiUrl1}`);
        return this._http.get(`${this.apiUrl2}`);
  }

  //agregar datos
addData(data:any):Observable<any>
  {
    console.log(data, 'createdapi=>');


    return this._http.post(`${this.apiUrl}`, data);
    return this._http.post(`${this.apiUrl1}`, data);
    return this._http.post(`${this.apiUrl2}`, data);
  }


  //borrar datos

  deleteData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`)
    return this._http.delete(`${this.apiUrl1}/${ids}`)
    return this._http.delete(`${this.apiUrl2}/${ids}`)
  }



  //actualizar datos
  updateData(data:any,id:any):Observable<any>
  {
      let ids = id;
      return this._http.put(`${this.apiUrl}${ids}`,data);
  }


  //conseguir un solo dato
  getSingleData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.get(`${this.apiUrl} ${ids}`);
  }

}
