import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private router: Router) { }

  login() {

    if (this.username === 'dynatrace' && this.password === "innovationday") {
      this.router.navigate(['/dashboard']);
    } 
  }
}
