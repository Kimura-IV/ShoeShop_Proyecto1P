import { CatalogoService } from '../../../shared/services/catalogo.service';
import { Categoria } from '../../../shared/interfaces/categoria';
import { Component, OnInit } from '@angular/core';
import { zapato } from '../../../shared/interfaces/zapato';
import { ZapatoComponent } from 'src/app/shared/components/zapato/zapato.component';

@Component({
  selector: 'app-mostrar-catalogo',
  templateUrl: './mostrar-catalogo.component.html',
  styleUrls: ['./mostrar-catalogo.component.css'],
})
export class MostrarCatalogoComponent implements OnInit {
  categoria = 0;

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

  constructor(private _service: CatalogoService) {}

  ngOnInit(): void {}

  /*applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/

  filtrarCategoria(
    listzapato: zapato[],
    listCategoria: Categoria[],
    categoria: number
  ) {
    return this._service.filtrarCategoria(listzapato, listCategoria, categoria);
  }
}
