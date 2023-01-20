import { Categoria } from '../interfaces/categoria';
import { Injectable } from '@angular/core';
import { zapato } from '../interfaces/zapato';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  private newsItemSource = new BehaviorSubject<string>('default message');
  currentNewsItem = this.newsItemSource.asObservable();

  categoria = 0;

  listCategorias: Categoria[] = [
    { id_categoria: 1, nombre_categoria: 'Deportivos Hombre' },
    { id_categoria: 2, nombre_categoria: 'Pupos de Futbol' },
    { id_categoria: 3, nombre_categoria: 'Zapatos para correr' },
    { id_categoria: 4, nombre_categoria: 'Deportivos Mujer ' },
    { id_categoria: 5, nombre_categoria: 'Ortopedicos' },
    { id_categoria: 6, nombre_categoria: 'Colaboraciones' },
  ];

  listzapatos: zapato[] = [
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

  constructor() {}

  getzapato() {
    return this.listzapatos.slice();
  }
  agregarzapato(data: zapato) {
    this.listzapatos.unshift(data);
  }

  updatezapato(data: zapato) {
    var id = this.listzapatos.find((zapato) => zapato.id_zapato == data.id_zapato);
    if (data.id_zapato == id?.id_zapato) {
      var index = this.listzapatos.findIndex(
        (zapato) => zapato.id_zapato == data.id_zapato
      );
      this.listzapatos[index] = data;
    }
  }

  findzapato(id: number) {
    var zapato = this.listzapatos.find((zapato) => zapato.id_zapato == id);
    return this.listzapatos[id];
  }

  changeNewsItem(newsItem: any) {
    this.newsItemSource.next(newsItem);
  }

  filtrarCategoria(
    listzapatos: zapato[],
    listCategoria: Categoria[],
    categoria: number
  ) {
    var id = listCategoria.find((categ) => categ.id_categoria == categoria);
    var zapato = listzapatos.filter(
      (zapato) => zapato.id_categoria === id?.id_categoria
    );

    if (categoria > 0) {
      zapato;
    } else if (categoria == 0) {
      var zapato = listzapatos;
    }
    console.log(categoria);
    console.log(id);
    console.log(zapato);
    return zapato;
  }

  mostrarCategoria(id: number) {
    var nom = this.listCategorias.find((categ) => categ.id_categoria == id);
    console.log(nom?.nombre_categoria);
    return nom?.nombre_categoria;
  }
}
