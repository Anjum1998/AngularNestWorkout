import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name=""
  designation=""
  email=""
  phone=""
  subject=""

  readValue=()=>
  {
    let data:any={"name":this.name,"designation":this.designation,"email":this.email,"phone":this.phone,"subject":this.subject}
    console.log(data)
    this.name=""
    this.designation=""
    this.email=""
    this.phone=""
    this.subject=""
  }

}
