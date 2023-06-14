import { Component } from '@angular/core';

@Component({
  selector: 'app-navlog',
  templateUrl: './navlog.component.html',
  styleUrls: ['./navlog.component.css']
})
export class NavlogComponent {
  name: string = "";
  password: string = "";
  login() {
    if (this.name == "admin" && this.password == "admin") {
      alert("login successful");
    }
    else {
      alert("login failed");
    } 
  }
}
