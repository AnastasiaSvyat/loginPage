import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginData } from '../shared/model/loginData';
import { MatchValidator } from '../shared/validators/password-validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        name: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.pattern(/[A-Z]/), Validators.minLength(8)]),
        isAgree: new FormControl(false, Validators.required),
        confirmPassword: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/[A-Z]/)
        ])
      },
      {
        validators: [
          MatchValidator(),
        ]
      });
  }

  get name() { return this.loginForm.get('name'); }
  get lastName() { return this.loginForm.get('lastName'); }
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  get confirmPassword() { return this.loginForm.get('confirmPassword'); }

  onSubmit(loginData: LoginData) {
    console.log(loginData);
  }

}