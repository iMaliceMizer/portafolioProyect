import { Component, OnInit } from '@angular/core';
import { ApiserviceService} from '../apiservice.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(private service: ApiserviceService, private cartService : CartService) { }

  readData: any;
  successmsg:any;

  ngOnInit(): void {
      this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>");
        ///NO LO BORRRES JESUSCRISTO
        this.readData = res.data;

        this.readData.forEach((a:any)=>{
          Object.assign(a,{cantidad:1,total:a.precio});
        });
      });
  }
  addtocomanda(item: any){
      this.cartService.addtoCart(item);
      this.cartService.setProducto(item)
  }

}
