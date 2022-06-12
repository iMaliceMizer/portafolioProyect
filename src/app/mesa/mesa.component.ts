import { Component, OnInit } from '@angular/core';
import { ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
  }

}
