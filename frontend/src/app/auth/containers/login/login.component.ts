import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email.validator';
import { Store } from '@ngxs/store';
import { Login } from '../../store/auth.actions';

@Component({
  selector: 'rcs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group(
    {
      email: ['', [Validators.required, EmailValidator]],
      password: ['', [Validators.required]]
    },
    { updateOn: 'submit' }
  );

  constructor(private fb: FormBuilder, private store: Store) { }

  login() {
    if (this.loginForm.valid) {
      this.store.dispatch(new Login(this.loginForm.value));
    }
  }
}
