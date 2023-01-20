import { CatalogoService } from '../../../shared/services/catalogo.service';
import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalle-zapato',
  templateUrl: './detalle-zapato.component.html',
  styleUrls: ['./detalle-zapato.component.css'],
})
export class DetalleZapatoComponent implements OnInit {
  InputZapato: any;
  newsItem: any;

  constructor(private _service: CatalogoService, public datepipe: DatePipe) {}

  ngOnInit(): void {
    this._service.currentNewsItem.subscribe(
      (newsItem) => (this.newsItem = newsItem)
    );
    /*this._service.currentNewsItem.subscribe(
      (newCategoria) => (this.newCategoria = newCategoria)
    );*/
    this.InputZapato = this.newsItem;
    //this.InputCategorias = this.newCategoria;
  }

  mostrarCategoria(id: number) {
    return this._service.mostrarCategoria(id);
  }

  format(fecha: Date) {
    return this.datepipe.transform(fecha, 'dd-MM-yyyy');
  }
}
