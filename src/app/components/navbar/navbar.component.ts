import { Component, OnInit } from '@angular/core';
import {DbserviceService} from '../../service/dbservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
services:any;
  constructor(private db: DbserviceService, private router: Router) { }

 
 
  ngOnInit(): void {
    this.db.getCategories().subscribe((value)=>{
      this.services = (value);      
    });
    console.log(this.services);
  }

}
