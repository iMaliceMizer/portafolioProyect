import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = []
  public productoList = new BehaviorSubject<any>([]);

  constructor() { }
  getProductos(){
    return this.productoList.asObservable();

  }

  setProducto(producto: any){
    this.cartItemList.push(...producto);
    this.productoList.next(producto);

  }
  addtoCart(producto: any) {
    this.cartItemList.push(producto);
    this.productoList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);

  }

  getTotalPrice(): number{
    let grandTotal = 0;
    this.cartItemList.map((a: any)=>{
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCartItem(producto: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(producto.id === a.id){
        this.cartItemList.splice(index,1);
      }
    });
  }
  removeAllCart(){
    this.cartItemList = []
    this.productoList.next(this.cartItemList);
  }
}
