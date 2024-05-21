import { Component, OnInit, inject } from '@angular/core';
import { LocalStorage } from '../service/localstorage.service';
import { SentService } from '../service/sent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  public router = inject(Router);
  public service = inject(SentService);
  public Localstorage = inject(LocalStorage);

  public login = this.Localstorage.getLogin();


  ngOnInit(): void {
    this.Localstorage.getLogin();
  }

  signout() {
    this.service.signout();
    this.router.navigate(['']);
  }
}
