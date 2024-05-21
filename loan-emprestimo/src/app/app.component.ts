import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SentService } from './service/sent.service';
import { LocalStorage } from './service/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public service = inject(SentService);
  public Localstorage = inject(LocalStorage);

  public respostaBack: any;

  public sentAvaliation = new FormGroup({
    age: new FormControl('26', { validators: [Validators.required, Validators.max(2)] }),
    cpf: new FormControl('275.484.389-23', { validators: [Validators.required, Validators.max(14)] }),
    name: new FormControl('Matheus Gabriel Pereira', { validators: [Validators.required] }),
    income: new FormControl(6000, { validators: [Validators.required] }),
    location: new FormControl('SP', { validators: [Validators.required, Validators.max(2)] }),
  })

  public sent(): void {

    const avaliacao = this.sentAvaliation.value;

    this.service.sent(avaliacao).subscribe(
      (response) => {
        this.respostaBack = response;
      },
      (error) => {
        console.log(error);
      }
    )

  }

  ngOnInit(): void {
    this.Localstorage.getToken();
  }

  login: any = 'Matheus@email.com';
  senha: any = '12345';
  errorMessage: string = '';
  isLoggingIn: boolean = false;


  public loginSent() {
    this.isLoggingIn = true;
    this.errorMessage = '';

    this.service.login(this.login, this.senha)
      .subscribe(
        data => {
          localStorage.getItem('access_token');
          const token = data.token;// Supondo que a resposta contenha um campo 'token'

          if (this.isLoggingIn === true) {
            this.Localstorage.setToken(data.token);
          }
          if (this.isLoggingIn === true) {
            this.Localstorage.setToken(token);
          }
          // Armazena o token no Localstorage
          console.log('Login successful!');
          console.log('entrou component')
          // Redirecionar para a página principal
        }
      );
  }

}
