import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  get isUsernameValid(): boolean {
    const usernameForm = this.loginForm.get('username');
    return !usernameForm.valid && usernameForm.touched;
  }

  get isPasswordValid(): boolean {
    const passwordForm = this.loginForm.get('password');
    return !passwordForm.valid && passwordForm.touched;
  }

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
  }

  login(): void {
    if (this.loginForm.valid)
      if (!this.loginService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)) this.loginForm.get('password').reset();

    this.loginForm.markAllAsTouched();
  }

}
