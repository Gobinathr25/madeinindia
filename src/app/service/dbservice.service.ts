import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
baseUrl:string = "http://localhost:4000/";
getcategory:string = this.baseUrl+"getCategory";
getSubCategory:string = this.baseUrl+"getSubCategory/id"
  constructor(private http: HttpClient) { }
  getCategories()
  {
    return this.http.get(`${this.getcategory}`, httpOptions)
  }
  getSubCategories(id)
  {
    return this.http.get(`${this.getSubCategory}/${id}`,httpOptions);
  }
}
