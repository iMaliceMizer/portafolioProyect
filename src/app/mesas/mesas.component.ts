import { Component, OnInit } from '@angular/core';
import { MesaService } from '../service/mesa.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesasComponent implements OnInit {

  constructor(private mesaservice: MesaService) { }

  ngOnInit(): void {
  }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  addProduct(){
    this.mesaservice.getProductos();
  }
}
