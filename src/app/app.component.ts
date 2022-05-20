import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  registrationForm: any;
  title = 'practice';


  ngOnInit(){
    this.registrationForm = new FormGroup({
      'firstname': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'lastname': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'password': new FormControl("", [Validators.required, Validators.minLength(10)]),
      'confirm_password': new FormControl("", [Validators.required, Validators.minLength(10)]),
      'phone_number': new FormControl("", [Validators.required, Validators.minLength(10)])
      
    })
  }
  get firstname(){
    return this.registrationForm.get('firstname')
  }
  get lastname(){
    return this.registrationForm.get('lastname')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get password(){
    return this.registrationForm.get('password')
  }
  get confirm_password(){
    return this.registrationForm.get('confirm_password')
  }
  get phone_number(){
    return this.registrationForm.get('phone_number')
  }

  
  SubmitForm(){
   console.log(this.registrationForm)
  }
  
}

