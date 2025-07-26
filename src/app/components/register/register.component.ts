import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // it wil hold data sent from html
  user = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    // password: new FormControl('', [Validators.required, Validators.minLength(4)]),

    // ✅ At least 1 uppercase letter
    // ✅ At least 1 lowercase letter
    // ✅ At least 1 digit
    // ✅ At least 1 special character (@#$%^&*!)
    // ✅ Minimum 8 characters


    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]),
    age: new FormControl('', [Validators.minLength(18)]),
    email: new FormControl('', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@com$')]),


  })
  register() {
    // alert("hello got registered")
    console.log(this.user.value);

  }
}
