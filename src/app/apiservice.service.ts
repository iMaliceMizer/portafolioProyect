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

  // obtener todos los datos

  getAllData():Observable<any>
  {
        return this._http.get(`${this.apiUrl}`);
  }

  //agregar datos
addData(data:any):Observable<any>
  {
    console.log(data, 'createdapi=>');


    return this._http.post(`${this.apiUrl}`, data);
  }


  //borrar datos

  deleteData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`)
  }



  //actualizar dator
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
