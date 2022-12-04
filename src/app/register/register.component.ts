import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  empid=""
  fname=""
  lname=""
  hno=""
  hname=""
  sname=""
  pincode=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  pname=""
  gender=""
  hdegree=""
  yoe=""
  dob=""
  username=""
  password=""
  confirm=""

  constructor(private router:Router){}
  readValue=()=>
  {
    let data:any={"empid":this.empid,"fname":this.fname,"lname":this.lname,"hno":this.hno,"hname":this.hname,"sname":this.sname,
  "pincode":this.pincode,"district":this.district,"state":this.state,"country":this.country,"mobile":this.mobile,"email":this.email,
  "pname":this.pname,"gender":this.gender,"hdegree":this.hdegree,"yoe":this.yoe,"dob":this.dob,"username":this.username,
  "password":this.password,"confirm":this.confirm}
    console.log(data)
    if (this.password==this.confirm) {
      alert("registered successfully")
      this.empid=""
      this.fname=""
      this.confirm=""
      this.country=""
      this.district=""
      this.dob=""
      this.email=""
      this.gender=""
      this.hdegree=""
      this.hname=""
      this.hno=""
      this.lname=""
      this.mobile=""
      this.password=""
      this.pname=""
      this.sname=""
      this.state=""
      this.username=""
      this.yoe=""
    } else {
      alert("Password does not matches")
    }
  }

}
