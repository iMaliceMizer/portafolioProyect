import { Injectable } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private service: ApiserviceService) { }

  publicMesaList:  any = [];
  public productoList = new BehaviorSubject<any>([]);

  getProductos(){
    return this.productoList.asObservable();

  }
}
