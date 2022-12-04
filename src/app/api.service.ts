import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchCourse=()=>
  {
    this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
  addCourse=(dataToSend:any)=>
  {
    this.http.post("https://mylinkurcodesapp.herokuapp.com/addcourse",dataToSend)
  }
}
