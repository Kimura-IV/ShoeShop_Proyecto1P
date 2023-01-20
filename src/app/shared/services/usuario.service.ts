import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  ELEMENT_DATA: User[] = [
    {
      cedula: 9000000000,
      nombres: 'Eddy Santiago',
      usuario: 'eddysa',
      correo: 'eddy.orralac@ug.edu.ec',
      contrasenia: '12345',
    },
    {
      cedula: 9111111111,
      nombres: 'Alisson Citlali',
      usuario: 'AlissonCi',
      correo: 'alisson.bermeov@ug.edu.ec',
      contrasenia: '12345',
    },
    {
      cedula: 9222222222,
      nombres: 'Joe Fernando',
      usuario: 'JoeFer',
      correo: 'joe.velezc@ug.edu.ec',
      contrasenia: '12345',
    },
    {
      cedula: 1234567890,
      nombres: 'Kayler Italo',
      usuario: 'kaylerit',
      correo: 'kayler.zuñigag@ug.edu.ec',
      contrasenia: '12345',
    },
  ];

  constructor() {}

  getUsuario() {
    return this.ELEMENT_DATA.slice();
  }

  agregarUsuario(usuario: User) {
    this.ELEMENT_DATA.unshift(usuario);
  }

  updateUser(data: User) {
    var cedula = this.ELEMENT_DATA.find((user) => user.cedula == data.cedula);
    if (data.cedula == cedula?.cedula) {
      var index = this.ELEMENT_DATA.findIndex(
        (user) => user.cedula == data.cedula
      );
      this.ELEMENT_DATA[index] = data;
    }
    // return this.ELEMENT_DATA.fill(data)
  }

  getUserByCedula(usuario: string) {
    return this.ELEMENT_DATA.find((user) => user.usuario == usuario);
  }
}
