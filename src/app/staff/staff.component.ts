import { Component, OnInit } from '@angular/core';
import { ApiserviceService} from '../apiservice.service';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor( private service: ApiserviceService) { }

  readData: any;

  ngOnInit(): void {
    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      ///NO LO BORRRES JESUSCRISTO
      this.readData = res.data;
    });
  }


}
