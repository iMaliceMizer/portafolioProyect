import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  constructor( private staffservice:  StaffService) { }

  readData: any;

  ngOnInit(): void {
    this.staffservice.getAllData().subscribe((res)=>{
      console.log(res,"res==>");
      //NO LO BORRRES JESUSCRISTO
     this.readData = res.data;
    });
  }


}
