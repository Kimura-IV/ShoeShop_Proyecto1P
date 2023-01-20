import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-agregar-sugerencia',
  templateUrl: './agregar-sugerencia.component.html',
  styleUrls: ['./agregar-sugerencia.component.css']
})
export class AgregarSugerenciaComponent implements OnInit {

  ingresarSugerencia!: FormGroup
  public isRegistered: boolean = false;

  constructor() {
  }

  onSubmit() {
    this.isRegistered = true;
    setTimeout(() => {
      this.isRegistered = false;
    }, 3000)
    console.log(this.ingresarSugerencia.value)
  }

  ngOnInit(): void {
    this.ingresarSugerencia = new FormGroup({
      marca: new FormControl('', Validators.required),
      modelo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      fechalanzamiento: new FormControl('', Validators.required),
      razones: new FormControl('', Validators.required)
    })
  }

}
