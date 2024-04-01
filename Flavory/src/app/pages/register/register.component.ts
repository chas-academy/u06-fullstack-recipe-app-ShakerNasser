import { Component } from '@angular/core';
import { Register } from '../../models/Register.model';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerObj: Register;
  constructor(private router: Router, private authService: AuthService) {
    this.registerObj = new Register();
  }
  onRegister() {
    console.log(this.registerObj);
    this.authService.postRegister(this.registerObj)?.subscribe({
      next: (res) => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);

          console.log(localStorage.getItem('token'));

          alert('Register Success');
          this.router.navigateByUrl('/home')

        } else {
          alert(res.message);
        }
      }
    })
  }
}