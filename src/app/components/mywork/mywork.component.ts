import { Component } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.css']
})
export class MyworkComponent {
  title = 'DirectivesProject';
  isVisible = true;
  buttonName = 'Hide';

  changeDisplay() {
    // negation it will make isVisible from false to true and true to fals based on button clikc
    this.isVisible = !this.isVisible;

    // String interpolation to chagne the name of button dynamically
    if (this.isVisible == true) {
      this.buttonName = 'Hide';
    }
    else {
      this.buttonName = 'Show';
    }
  }

  rolls = [1, 2, 3, 4, 5];

  students: { id: number, name: string, age: number }[] = [
    { id: 1, name: 'Radha', age: 22 },
    { id: 2, name: 'amit', age: 27 },
    { id: 3, name: 'Neha', age: 30 },
    { id: 4, name: 'Vijay', age: 19 },
    { id: 5, name: 'Priya', age: 26 }
  ];

  num: number = 1;

  register() {
    this.num = 1;


  }
  login() {
    this.num = 2
  }


  // attributes directives
  // ngStyle
  textColor = "red";

  tcolor = 'black';

  username = '';
  password = '';
  textMsg = '';
  Login() {
    if (this.username != "ram") {
      this.tcolor = 'blue';
      this.textMsg = 'wrong username';
    }
    if (this.password != '123') {
      this.tcolor = 'red';
      this.textMsg = 'wrong password';
    }
    if (this.username == 'ram' && this.password == '123') {
      this.tcolor = 'gray';
      this.textMsg = 'all good';
    }
  }

  isPrimary = true;

  getClass(){
    if(this.isPrimary){
      return 'secondary';
    }
    else{
      return 'primary';
    }
  }


}

