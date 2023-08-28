import { Component, OnInit } from '@angular/core';
import { CrearDeveloperService } from 'src/app/services/crear_developer.service';
import { developerForm } from 'src/app/models/developer';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-listar-developers',
  templateUrl: './listar-developers.component.html',
  styleUrls: ['./listar-developers.component.css']
})
export class ListarDevelopersComponent implements OnInit {

  listaDevelopers: developerForm[] = [];

  constructor(private developerServicio: CrearDeveloperService ) { }

  ngOnInit(): void {
    this.obtenerRegistroDeDevelopers()
  }

  obtenerRegistroDeDevelopers() {
    this.developerServicio.getRegistrosDevelopers().subscribe(data => {
      this.listaDevelopers = data
    })
  }

  eliminarDeveloper(id: any) {
    Swal.fire({
        title: 'Esta seguro que desea eliminar este contacto?',
        text: "Esta acción no se podrá deshacer!",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar !',
        cancelButtonText: 'Cancelar'

    }).then((result) => {
        if (result.isConfirmed) {
            this.developerServicio.deleteRegistroDeveloper(id).subscribe(data => {

                Swal.fire(
                    'Eliminado!',
                    'El contacto ha sido eliminado.',
                    'success'
                )
                this.obtenerRegistroDeDevelopers()
            })
        }
    })
}




}

