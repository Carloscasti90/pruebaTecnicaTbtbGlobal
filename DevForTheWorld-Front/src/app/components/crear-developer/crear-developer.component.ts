import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrearDeveloperService } from 'src/app/services/crear_developer.service';
import  Swal from 'sweetalert2';
import { developerForm } from 'src/app/models/developer';
import { ListarDevelopersComponent } from '../listar-developers/listar-developers.component';




@Component({
  selector: 'app-crear-developer',
  templateUrl: './crear-developer.component.html',
  styleUrls: ['./crear-developer.component.css']
})
export class CrearDeveloperComponent implements OnInit {

  developerForm: FormGroup;
  regexString = /^[A-Za-z]+$/
    regexAlfaNumerica = /^[a-zA-Z0-9\s\-\_!@#$%^&*()+=\[\]{}|\\:;"'<>,.?\/`~]*$/
    regexNumero = /^[0-9]+$/
    regexUrl = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    titulo_formulario: string = 'Registrar datos'
    id: string | null


  constructor(private fb: FormBuilder, private _developerService: CrearDeveloperService, private router: Router,
    private idRoute: ActivatedRoute) {
    this.developerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      primer_apellido: ['', [Validators.required ]],
      segundo_apellido: ['', [Validators.required ]],
      identificacion: ['', [Validators.required, Validators.pattern(this.regexNumero) ]],
      edad: ['', [Validators.required, Validators.pattern(this.regexNumero) ]],
      telefono: ['', [Validators.required, Validators.pattern(this.regexNumero) ]],
      tipo_de_desarrollador: ['', [Validators.required ]],
      correo: ['', [Validators.required, Validators.pattern(this.regexCorreo) ]],
      ciudad: ['', [Validators.required, Validators.minLength(3)]],
      foto_de_perfil: ['', [Validators.required, Validators.pattern(this.regexUrl) ]]

    })

    this.id = this.idRoute.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.accionSolicitada()

  }

  actualizar_registrar_developer (){
    if(this.id === null){
      console.log(this.developerForm);

      this._developerService.postRegistroDeveloper(this.developerForm.value).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Datos actualizados',
          confirmButtonColor: "#52874a"
      })
      this.router.navigate(['listar-developers' ])
  })
} else {
    this._developerService.putRegistroDeveloper(this.id, this.developerForm.value).subscribe(data => {
      Swal.fire({
        icon: 'success',
        title: 'Producto actualizado',
        confirmButtonColor: "#52874a"
    })
    this.router.navigate(['listar-developers'])
  })
}
}

accionSolicitada() {
  if (this.id !== null) {
      this.titulo_formulario = "Modificar Información"
      this._developerService.getRegistroDeveloper(this.id).subscribe(data => {
          console.log(data)
          this.developerForm.setValue({
              nombre: data.nombre,
              primer_apellido: data.primer_apellido,
              segundo_apellido: data.segundo_apellido,
              identificacion: data.identificacion,
              edad: data.edad,
              telefono: data.telefono,
              tipo_de_desarrollador: data.tipo_de_desarrollador,
              correo: data.correo,
              ciudad: data.ciudad,
              foto_de_perfil: data.foto_de_perfil
          })
      })
  }
}

}
