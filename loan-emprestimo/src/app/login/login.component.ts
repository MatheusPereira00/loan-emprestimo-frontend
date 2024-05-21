import { Component, inject } from '@angular/core';
import { LocalStorage } from '../service/localstorage.service';
import { SentService } from '../service/sent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public service = inject(SentService);
  public Localstorage = inject(LocalStorage);

  login: any = 'MatheusGabriel@gmail.com';
  senha: any = '12345';
  isLoggingIn = false;

  constructor(private router: Router) { }

  public loginSent() {
    this.isLoggingIn = true;

    this.service.login(this.login, this.senha)
      .subscribe(
        data => {
          if (this.isLoggingIn == true) {
            this.router.navigate(['products'])
          } else {
            console.log('error')
          }
        }
      );
  }
}
