import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {



  constructor(private _http:HttpClient
    ) { }

  //conectar frontend con el backend!

  apiUrl = 'http://localhost:3000/producto/';
  apiUrl1 = 'http://localhost:3001/mesero/';


  // obtener todos los datos producto
getAllData():Observable<any>
  {
        return this._http.get(`${this.apiUrl}`);
        return this._http.get(`${this.apiUrl1}`);
  }


  // Conseguir img
  getImage(id:any): Observable<any>
  {
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}` + 'authentication/getImage' , {
    responseType: 'blob'})
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
