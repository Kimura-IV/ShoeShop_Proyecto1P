import { CatalogoService } from '../../services/catalogo.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zapato',
  templateUrl: './zapato.component.html',
  styleUrls: ['./zapato.component.css'],
})
export class ZapatoComponent implements OnInit {
  @Input() InputZapato: any;
  newsItem: any;

  constructor(private router: Router, private _service: CatalogoService) {}

  ngOnInit(): void {
    this._service.currentNewsItem.subscribe(
      (newsItem) => (this.newsItem = newsItem)
    );
  }

  openDetalle(itemDataSend: any) {
    this._service.changeNewsItem(itemDataSend);
    this.router.navigate(['/detalle-zapato']);
  }
}
