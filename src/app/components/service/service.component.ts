import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbserviceService } from '../../service/dbservice.service'
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
category_id:string;
  constructor(private activated:ActivatedRoute,private dbService: DbserviceService) { }

  ngOnInit(): void {
    this.category_id=this.activated.snapshot.params.category_id;
    this.dbService.getSubCategories(this.category_id);

  }

}
