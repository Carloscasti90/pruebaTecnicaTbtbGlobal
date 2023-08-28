export class developerForm {
  _id?: string
  nombre: string
  primer_apellido: string
  segundo_apellido: string
  identificacion: number
  edad: number
  telefono: number
  tipo_de_desarrollador: string
  correo: string
  ciudad: string
  foto_de_perfil: string


  constructor(nombre: string, primer_apellido: string, segundo_apellido: string, identificacion: number, edad: number,
    telefono: number, tipo_de_desarrollador: string, correo: string, ciudad: string, foto_de_perfil: string ){

      this.nombre = nombre;
      this.primer_apellido = primer_apellido;
      this.segundo_apellido = segundo_apellido;
      this.identificacion = identificacion;
      this.edad = edad;
      this.telefono = telefono;
      this.tipo_de_desarrollador = tipo_de_desarrollador;
      this.correo = correo;
      this.ciudad = ciudad;
      this.foto_de_perfil = foto_de_perfil
    }

}
