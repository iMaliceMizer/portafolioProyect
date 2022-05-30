import { Component, OnInit } from '@angular/core';
import { ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  readData:any;
  successmsg: any;

  ngOnInit(): void {
    this.getAllData();
  }

  //borra
  deleteID(id:any)
    {
      console.log(id, 'deleteid==>');
      this.service.deleteData(id).subscribe((res)=>{
        console.log(res,'deleteres==>');
        this.successmsg = res.message;
        this.getAllData();

        this.service.getAllData().subscribe((res)=>{
          console.log(res,"res==>");
            this.readData = res.data;
        });

      });
    }

// Conseguir todos los datos
  getAllData()
  {
      this.service.getAllData().subscribe((res)=>{
        console.log(res, "res==>");
        this.readData = res.data;
      });
  }


}
