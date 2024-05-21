import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  constructor(private http: HttpClient) { }
  
  setToken(token: string) {
    localStorage.setItem('authToken', token);
    console.log("aqui foi armazenado")
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  removeToken() {
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

}
