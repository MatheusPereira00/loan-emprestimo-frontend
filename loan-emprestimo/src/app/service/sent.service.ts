import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { LocalStorage } from './localstorage.service';
import { ResponseType } from '../types/ResponseType';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SentService {
  apiSecurity = "http://localhost:8080/auth";

  public httpOptions = {
    headers: new HttpHeaders(),
    responseType: 'text' as 'json',
  };

  constructor(private http: HttpClient, private Localstorage: LocalStorage, private router: Router) { }

  sent(avaliacao: any) {
    return this.http.post(`${environment.api}`, avaliacao).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === 400) {
        alert("A Requisição não foi realizada, verifique seus dados!")
      }
      return throwError(error);
    }));
  }

  login(login: string, senha: string): Observable<ResponseType> {
    const body = { login, senha };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<ResponseType>(this.apiSecurity, body, { headers })
      .pipe(
        tap(response => {

          const token = response.token;
          this.Localstorage.setToken(token);
          localStorage.setItem('authToken', token);

          const login = response.login;
          this.Localstorage.setLogin(login);
          localStorage.setItem('login', login);

          console.log(token)

        }),

        catchError(error => {
          if (error.status === 500) {
            console.error('Invalid credentials or request format:', error.message);
            return throwError(() => new Error('Invalid credentials or request format. Please check your login details.'));
          } else {
            // Handle other potential errors here (e.g., network errors, server errors)
            return throwError(() => new Error('An unexpected error occurred. Please try again later.'));
          }
        })
      );
  }


  signout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('login');
    localStorage.removeItem('setIsLoggingIn')
    this.router.navigate(['']);
  }


  // public decodeToken(token: string): DecodedTokenComplete {
  //   const decodedToken: DecodedTokenComplete = {
  //     decodedToken: this.JwtHelper.decodeToken(token),
  //     expirationDate: this.JwtHelper.getTokenExpirationDate(token),
  //     isExpired: this.JwtHelper.isTokenExpired(token),
  //   };

  //   return decodedToken;
  // }

}
