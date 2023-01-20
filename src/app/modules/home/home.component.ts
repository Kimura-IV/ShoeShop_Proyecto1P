import { Categoria } from '../../shared/interfaces/categoria';
import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/shared/services/catalogo.service';
import { zapato } from '../../shared/interfaces/zapato';
import newsData from '../../../assets/json/News_MOCK_DATA.json';
import { News } from '../noticias/interfaces/news';
import { NoticiasService } from 'src/app/shared/services/modules/noticias/noticias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //#region Variables

  listCategorias: Categoria[] = [
    { id_categoria: 1, nombre_categoria: 'Deportivos Hombre' },
    { id_categoria: 2, nombre_categoria: 'Pupos de Futbol' },
    { id_categoria: 3, nombre_categoria: 'Zapatos para correr' },
    { id_categoria: 4, nombre_categoria: 'Deportivos Mujer ' },
    { id_categoria: 5, nombre_categoria: 'Ortopedicos' },
    { id_categoria: 6, nombre_categoria: 'Colaboraciones' },
  ];

  listzapato: zapato[] = [
    {
      id_zapato: 1,
      id_categoria: 4 /*Deportivos de mujer*/,
      fecha_lanzamiento: new Date(16 / 6 / 2020),
      descripcion:'',
      marca: 'Adiddas',
      modelo: 'TENIS GALAXY 6',
      precio: 99.00,
      imagen: 'Galaxy6.webp',
    },
    {
      id_zapato: 2,
      id_categoria: 3 /*Zapatos para correr*/,
      fecha_lanzamiento: new Date(24 / 5 / 2021),
      descripcion:'',
      marca: 'Adiddas',
      modelo: 'TENIS ADIZERO RC 4',
      precio: 164.90,
      imagen: 'ADIZERORC4.webp',
    },
    {
      id_zapato: 3,
      id_categoria: 1 /*Deportivos Hombres*/,
      fecha_lanzamiento: new Date(16 / 8 / 2021),
      descripcion:'',
      marca: 'Adiddas',
      modelo: 'TENIS STAN SMITH',
      precio: 149.90,
      imagen: 'STANSMITH.webp',
    },
    {
      id_zapato: 4,
      id_categoria: 4 /*Deportivos mujer*/,
      fecha_lanzamiento: new Date(17 / 3 / 2022),
      descripcion:'',
      marca: 'Adiddas',
      modelo: 'TENIS SUPERSTAR',
      precio: 149.90,
      imagen: 'TENISSUPERSTAR.webp',
    },
    {
      id_zapato: 5,
      id_categoria: 5 /*otopedicos*/,
      fecha_lanzamiento: new Date(29 / 10 / 2020),
      descripcion:'',
      marca: 'Hkr',
      modelo: 'Ortopedico para caminar',
      precio: 53.95,
      imagen: 'ZAOrtopedico.webp',
    },
    {
      id_zapato: 6,
      id_categoria: 2 /*Pupos de futbol*/,
      fecha_lanzamiento: new Date(6 / 8 / 2020),
      descripcion:'',
      marca: 'Adiddas',
      modelo: 'GUAYOS PREDATOR EDGE.3 LOW TERRENO FIRME',
      precio: 134.90,
      imagen: 'Guayos.webp',
    },
  ];

  listNewsHighlight2: News[] = newsData;

  //#endregion

  constructor(
    private router: Router,
    private _service: CatalogoService,
    private serviceDataNews: NoticiasService
  ) {}

  ngOnInit(): void {}

  //#region Functions
  filtrarCategoria(
    listLibros: zapato[],
    listCategoria: Categoria[],
    categoria: number
  ) {
    return this._service.filtrarCategoria(listLibros, listCategoria, categoria);
  }

  openArticle(itemDataSend: any) {
    this.serviceDataNews.changeNewsItem(itemDataSend);
    this.router.navigate(['noticias/articulo']);
  }
  //#endregion
}
