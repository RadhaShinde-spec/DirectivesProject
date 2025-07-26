import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username='';
  password='';

  constructor(private router: Router){

  }
  login(){
    if(this.username=='ram'&&this.password=='123')
    {
      // then render or navigate to admin dashboard
      this.router.navigateByUrl('/admin-dashboard')

      // alert(this.username + "username and password");
    }else{
      alert("as invlaid login details")
    }
    
  }
}
