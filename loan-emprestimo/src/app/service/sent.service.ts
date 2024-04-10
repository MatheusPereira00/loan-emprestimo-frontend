import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SentService {

  constructor(private http: HttpClient) { }

  sent(avaliacao: any) {
    return this.http.post(`${environment.api}`, avaliacao).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === 400) {
       alert("A Requisição não foi realizada, verifique seus dados!")
      }
      return throwError(error);
    }));

  }
}
