import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Curso} from "../model/curso";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private baseUrl: string = "http://localhost:8080/api/usuario"; //TODO: Agregar url del servicio

  constructor(private httpClient: HttpClient) {

  }

  /**
   * Metodo que obtiene los cursos
   * @returns Observable<Curso[]> Lista de cursos
   */
  getCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.baseUrl+"/usuario")
      .pipe(
        map((result:any)=>{
          console.log(result);
          return result;
        }));
  }

  /**
   * Metodo que obtiene un curso
   */
  getCurso(idCurso: number): Observable<Curso> {
    return this.httpClient.get<Curso>(this.baseUrl + '/usuario/' + idCurso);
  }

  /**
   * Metodo que crea un curso
   * @param curso Curso a crear
   */
  crearCurso(curso: Curso): Observable<Curso> {
    return this.httpClient.post<Curso>(this.baseUrl+"/usuario", curso);
  }

  /**
   * Metodo que edita un curso
   * @param curso Curso a editar
   */
  editarCurso(curso: Curso): Observable<Curso> {
    return this.httpClient.put<Curso>(this.baseUrl+"/usuario", curso);
  }

  /**
   * Metodo que elimina un curso
   */
  borrarCurso(idCurso: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/usuario/" + idCurso);
  }


}
