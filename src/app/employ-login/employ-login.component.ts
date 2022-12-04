import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employ-login',
  templateUrl: './employ-login.component.html',
  styleUrls: ['./employ-login.component.css']
})
export class EmployLoginComponent {
empid=""
password=""
constructor(private route:Router){}
readValue=()=>
{
  let data:any={"empid":this.empid,"password":this.password}
  console.log(data)
  if (this.empid=="1122"&& this.password=="12345") {
    this.route.navigate(['/course'])
  } else {
    
  }
}
}
