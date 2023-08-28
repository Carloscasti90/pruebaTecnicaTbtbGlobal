import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { developerForm } from '../models/developer';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CrearDeveloperService {

  urlApi = 'http://localhost:4000/api'

  constructor(private http: HttpClient) { }

  postRegistroDeveloper(dataDeveloper: developerForm): Observable<any> {
    return this.http.post(this.urlApi+"/listar-developers", dataDeveloper)
  }

  getRegistrosDevelopers(): Observable<any> {
    return this.http.get(this.urlApi+"/listar-developers")
  }

  deleteRegistroDeveloper(id:string): Observable<any>{
    return this.http.delete(`${this.urlApi}/listar-developers/${id}`)
  }

  getRegistroDeveloper(id: string): Observable<any>{
    return this.http.get(`${this.urlApi}/listar-developers/${id}`)
  }

  putRegistroDeveloper(id:string, dataDeveloper:developerForm){
    return this.http.put(`${this.urlApi}/listar-developers/${id}`, dataDeveloper )
  }

}
