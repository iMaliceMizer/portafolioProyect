import { Component, OnInit } from '@angular/core';
import { ApiserviceService} from '../apiservice.service';
import { CartService } from '../service/cart.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from 'express';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor( private router:ActivatedRoute, private sanitizer: DomSanitizer, private service: ApiserviceService, private cartService : CartService) { }

  readData: any;
  successmsg:any;
  getparamid: any;



  ngOnInit(): void {
      this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>");
        ///NO LO BORRRES JESUSCRISTO
        this.readData = res.data;
      // POR FAVOR NO LO BORRES
        });
        this.readData.forEach((a:any)=>{
          Object.assign(a,{cantidad:1,total:a.precio});
        });
        this.getparamid = this.router.snapshot.paramMap.get('id');
        
        

  }
  addtocomanda(item: any){
      this.cartService.addtoCart(item);
      this.cartService.setProducto(item)
  }

  //conseguir img




}
