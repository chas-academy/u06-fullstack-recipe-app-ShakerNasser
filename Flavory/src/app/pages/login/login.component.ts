import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Login } from '../../models/Login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: Login;
  constructor(private router: Router, private authService: AuthService) {
    this.loginObj = new Login();
    console.log(this.loginObj);
  }
  onLogin() {
    this.authService.postLogin(this.loginObj)?.subscribe({
      next: (res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.authService.updateTokenState()
          console.log(localStorage.getItem('token'));

          alert('Login Success');
          this.router.navigateByUrl('')

        } else {
          alert(res.message);
        }
      }
    })

  }
}