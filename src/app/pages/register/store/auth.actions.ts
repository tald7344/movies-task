import { createAction, props } from '@ngrx/store';
import { LoginRequest } from '../entity/login-request';
import { SignupRequest } from '../entity/signup-request';

export const startLogin = createAction(
  '[Auth/API] Start Login', 
  props<{ data: LoginRequest }>()
);

export const successLogin = createAction(
  '[Auth/API] Success Login'
);

export const failureLogin = createAction(
  '[Auth/API] Failure Login',
  props<{ error: string }>()
);

export const successSignup = createAction(
  '[Auth/API] Success Signup'
);

export const failureSignup = createAction(
  '[Auth/API] Failure Signup',
  props<{ error: string }>()
);
