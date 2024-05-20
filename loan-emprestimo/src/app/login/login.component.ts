import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { SentService } from '../service/sent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public service = inject(SentService);
  public authService = inject(AuthService);

  login: any = 'MatheusGabriel@gmail.com';
  senha: any = '12345';
  isLoggingIn = false;

  constructor(private router: Router) { }

  public loginSent() {
    this.isLoggingIn = true;

    // this.errorMessage = '';
    this.service.login(this.login, this.senha)
      .subscribe(
        data => {
          if (this.isLoggingIn == true) {
            this.router.navigate(['products'])
          } else {

            console.log('error')
          }
          // localStorage.getItem('access_token');
          // const token = data.token;// Supondo que a resposta contenha um campo 'token'

          // if (this.isLoggingIn === true) {
          //   this.authService.setToken(data.token);
          // }
          // if (this.isLoggingIn === true) {
          //   this.authService.setToken(token);
          // }
          // // Armazena o token no AuthService
          // console.log('Login successful!');
          // console.log('entrou component')
          // Redirecionar para a página principal
        }
      );
  }
}
