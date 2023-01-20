import { CatalogoService } from '../../../../shared/services/catalogo.service';
import { Component} from '@angular/core';
import { zapato } from 'src/app/shared/interfaces/zapato';
import { AgregarZapatoComponent } from '../agregar-zapato/agregar-zapato.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listar-zapato',
  templateUrl: './listar-zapato.component.html',
  styleUrls: ['./listar-zapato.component.css']
})
export class ListarZapatoComponent{

  listzapato: zapato[] = []
  displayedColumns: string[] = ['id_zapato', 'marca', 'modelo','precio', 'opciones'];
  modelo:string = "";
  dataSource = new MatTableDataSource<any>;

  constructor(private catalogService: CatalogoService, public dialog: MatDialog) {
    this.modelo = "Agregar Zapato";
  }

  openDialog(titulo:string) {
    this.dialog.open(AgregarZapatoComponent,{data:titulo});
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  ngOnInit(): void {
    this.listzapato = this.catalogService.getzapato();
    this.dataSource = new MatTableDataSource(this.listzapato);

  }

  editzapato(element: any) {
    this.dialog.open(AgregarZapatoComponent, {
      data: element,
    })
  }

  //para filtrar por nombre
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  verDetalle(element: any){
    this.dialog.open(AgregarZapatoComponent, {
      data: element
    })
  }

}
