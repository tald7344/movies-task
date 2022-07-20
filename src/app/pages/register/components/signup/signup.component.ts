import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../service/register.service';
import { TokenService } from 'src/app/@theme/admin-service/token/token.service';
import { AuthService } from 'src/app/@theme/admin-service/auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/@theme/store/app-state';
import { successSignup } from '../../store/auth.actions';
import { FormControl, FormGroup } from '@angular/forms';
import { setLoadSpinner } from 'src/app/@theme/store/shared/shared.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errors = [];
  error = null;
  process = false;

  constructor(private store: Store<AppState>,
              private authService: AuthService,
              private tokenService: TokenService,
              private registerService: RegisterService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit() {
    this.process = true;
    // Run loading spinner
    this.store.dispatch(setLoadSpinner({status: true}));
    const fromObject = this.signupForm.getRawValue();
    this.registerService.Signup(fromObject).subscribe(
      response => {
        this.process = false;
        // handle error message
        if (response.status == 'failed') {
          this.errors = response.message;
          return;
        }
        // Store Token
        this.tokenService.handle(fromObject.email, response.authorisation.token);        
        // change Auth Status
        this.authService.changeAuthStatus(true);
        // stop loading spinner
        this.store.dispatch(setLoadSpinner({status: false}));
        // dispatch success signup to make auto redirect
        this.store.dispatch(successSignup());
      });
  }


}
