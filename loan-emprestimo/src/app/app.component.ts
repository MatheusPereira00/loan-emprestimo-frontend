import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SentService } from './service/sent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private service = inject(SentService);

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

}
