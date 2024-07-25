import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    //Login Form
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }
    )

    //Registration Form

    this.registerForm = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      }
    )
  }

  toggleForm(form: 'login' | 'register'){
    this.activeForm = form;
  }

  login(){
    if(this.loginForm.valid){
      console.log("Login Info====>>", this.loginForm.value);
      this.router.navigate(['/dashboard']);
    }else{
      this.snackBar.open('Invalid email or password!', 'Close', { duration: 2000, panelClass: ['mat-warn'] });
    }
  }


  register() {
    if (this.registerForm.valid) {
      console.log("Register info==>>", this.registerForm.value);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      this.router.navigate(['/login']);
    } else {
      this.snackBar.open('Please fill in all fields correctly!', 'Close', { duration: 2000 });
    }
  }
}
