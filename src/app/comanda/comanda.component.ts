import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {

  public productos: any = [];
  public grandTotal !: number;
  cantTotal = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProductos()
    .subscribe(res=>{
      this.productos = res;
      this.productos.forEach((producto:any) =>{
        this.grandTotal += (producto.cantidad * producto.precio)
      });
    });

  }


  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
    emptycart(){
      this.cartService.removeAllCart();
    }
}
