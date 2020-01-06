import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CONST_USUARIO } from 'src/app/dashboard/user/user.constants'
import { UserCriteria } from '../models/user.criteria.model';
import { CollectionResponse } from 'src/app/shared/models/collection.response';
import { UserModule } from '../user.module';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constants = CONST_USUARIO;

  private resourceUrl: string;
  public roles = [];

  constructor(
    private http: HttpClient,
  ) {
    this.resourceUrl = `${environment.host}${environment.api}${this.constants.path_administracion_usuario}`;
    console.log(this.resourceUrl); 
  }

  search(criteria: UserCriteria): Observable<CollectionResponse<UserModule>> {
    return this.http.get<CollectionResponse<UserModule>>(this.resourceUrl + '/search?' + criteria.getUrlParameters());
  }

  list(): Observable<UserModule[]> {
    return this.http.get<UserModule[]>(this.resourceUrl);
  }

  create(usuario: UserModule): Observable<UserModule> {
    return this.http.post<UserModule>(this.resourceUrl, usuario, httpOptions);
  }

  update(usuario: UserModule): Observable<UserModule> {
    return this.http.put<UserModule>(this.resourceUrl, usuario, httpOptions);
  }

  detail(usuarioId: number): Observable<UserModule> {
    return this.http.get<UserModule>(this.resourceUrl + '/' + usuarioId);
  }

  delete(usuarioId: number): Observable<UserModule> {
    return this.http.delete<UserModule>(this.resourceUrl + '/' + usuarioId);
  }
  
}
