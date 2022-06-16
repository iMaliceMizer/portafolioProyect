import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MesaService } from '../service/mesa.service';
import { FormGroup, FormControl } from '@angular/forms';
import {ComandaserviceService} from '../service/comandaservice.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesasComponent implements OnInit {

  constructor(private comandaservice: ComandaserviceService,private mesaservice: MesaService, private router:ActivatedRoute) { }

  readData: any;
  getparamid: any;


  ngOnInit(): void {
    this.mesaservice.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      ///NO LO BORRRES JESUSCRISTO
      this.readData = res.data;
  });
}
 
mesaForm = new FormGroup({
  'id': new FormControl()
});


AgregarMesa(mesa: any){
  this.mesaservice.addMesa(mesa);
  this.comandaservice.addData(this.mesaForm.value).subscribe((res)=>{
    this.mesaForm.reset();
  })
}



}
