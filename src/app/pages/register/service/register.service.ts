import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from '../entity/login-request';
import { AdminConfig } from '../../AdminConfig';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  // Handling the error
  private static errorHandler(error: HttpErrorResponse) {
    return throwError(error || 'Server Error');
  }


  login(data): Observable<any> {
    const httpOptions = this.httpOptions();
    return this.httpClient.post<any>(
      AdminConfig.loginAPI, 
      JSON.stringify(data),
      httpOptions
      ).pipe(catchError(RegisterService.errorHandler));
  }

  Signup(data): Observable<any> {
    const httpOptions = this.httpOptions(); 
    return this.httpClient.post<any>(
      AdminConfig.signupAPI, 
      JSON.stringify(data),
      httpOptions
      ).pipe(catchError(RegisterService.errorHandler));
  }

  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }


}
