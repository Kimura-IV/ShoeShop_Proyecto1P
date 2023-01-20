import { zapato } from '../../../../shared/interfaces/zapato';
import { Categoria } from 'src/app/shared/interfaces/categoria';
import { CatalogoService } from '../../../../shared/services/catalogo.service';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar-zapato',
  templateUrl: './agregar-zapato.component.html',
  styleUrls: ['./agregar-zapato.component.css'],
})
export class AgregarZapatoComponent {
  actionBtn: string = 'Guardar';
  titulo: string = 'Agregar Zapato';
  zapatoForm!: FormGroup;
  archivos: any = [];

  listCategorias: Categoria[] = [
    { id_categoria: 1, nombre_categoria: 'Deportivos Hombre' },
    { id_categoria: 2, nombre_categoria: 'Pupos de Futbol' },
    { id_categoria: 3, nombre_categoria: 'Zapatos para correr' },
    { id_categoria: 4, nombre_categoria: 'Deportivos Mujer ' },
    { id_categoria: 5, nombre_categoria: 'Ortopedicos' },
    { id_categoria: 6, nombre_categoria: 'Colaboraciones' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private _servicezapato: CatalogoService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public editarDatos: any,
    private dialogRef: MatDialogRef<AgregarZapatoComponent>
  ) {}

  ngOnInit(): void {
    this.zapatoForm = this.formBuilder.group({
      id_zapato: ['', Validators.required],
      descripcion: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      precio: ['', Validators.required],
      fecha_lanzamiento: ['', Validators.required],
      id_categoria: ['', Validators.required],
    });

    if (this.editarDatos) {
      this.actionBtn = 'Actualizar';
      this.titulo = 'Modificar zapato';
      this.zapatoForm.controls['id_zapato'].setValue(this.editarDatos.id_zapato),
        this.zapatoForm.controls['marca'].setValue(this.editarDatos.marca),
        this.zapatoForm.controls['modelo'].setValue(this.editarDatos.modelo),
        this.zapatoForm.controls['precio'].setValue(this.editarDatos.precio),
        this.zapatoForm.controls['descripcion'].setValue(
          this.editarDatos.descripcion
        ),
        this.zapatoForm.controls['fecha_lanzamiento'].setValue(
          this.editarDatos.fecha_lanzamiento
        ),
        this.zapatoForm.controls['id_categoria'].setValue(
          this.editarDatos.id_categoria
        );
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  agregarzapato() {
    if (!this.editarDatos && this.actionBtn === 'Guardar') {
      console.log('a');
      const zapato: zapato = {
        id_zapato: this.zapatoForm.value.id_zapato,
        descripcion: this.zapatoForm.value.descripcion,
        fecha_lanzamiento: this.zapatoForm.value.fecha_lanzamiento,
        id_categoria: this.zapatoForm.value.id_categoria,
        marca: this.zapatoForm.value.marca,
        modelo: this.zapatoForm.value.modelo,
        precio: this.zapatoForm.value.precio,
        imagen: 'this.bookForm.value.imagen',
      };
      this.router.navigate(['/cpanel']).then(() =>
        this.router.navigate(['/cpanel/zapato'], {
          state: { editarDatos: this._servicezapato.agregarzapato(zapato) },
        })
      );
    } else if (this.actionBtn === 'Actualizar') {
      console.log('b');
      const zapato: zapato = {
        id_zapato: this.zapatoForm.value.id_zapato,
        descripcion: this.zapatoForm.value.descripcion,
        fecha_lanzamiento: this.zapatoForm.value.fecha_lanzamiento,
        id_categoria: this.zapatoForm.value.id_categoria,
        marca: this.zapatoForm.value.marca,
        modelo: this.zapatoForm.value.modelo,
        precio: this.zapatoForm.value.precio,
        imagen: 'this.zapatoForm.value.imagen',
      };
      this.router.navigate(['/cpanel']).then(() =>
        this.router.navigate(['/cpanel/zapato'], {
          state: { editarDatos: this._servicezapato.updatezapato(zapato) },
        })
      );
    }
    this.dialogRef.close();
  }

  uploadImage(event: any) {
    const fileCapture = event.target.files[0];
    this.archivos.push(fileCapture);
  }
}
