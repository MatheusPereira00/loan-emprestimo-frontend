import { Component, OnInit, inject } from '@angular/core';
import { LocalStorage } from '../service/localstorage.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  public Localstorage = inject(LocalStorage);

  public login = this.Localstorage.getLogin();

  ngOnInit(): void {
    this.Localstorage.getLogin();
  }
}
