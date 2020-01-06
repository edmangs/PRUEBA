import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CollectionResponse } from 'src/app/shared/models/collection.response';
import { MantenimientoCriteria } from '../models/mantenimiento.criteria.model';
import { MantenimientoModule } from '../mantenimiento.module';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  private resourceUrl: string;
  public roles = [];

  constructor(
    private http: HttpClient,
  ) {
    this.resourceUrl = `${environment.host}${environment.api}/mantenimiento`; 
  }

  search(criteria: MantenimientoCriteria): Observable<CollectionResponse<MantenimientoModule>> {
    return this.http.get<CollectionResponse<MantenimientoModule>>(this.resourceUrl + '/search?' + criteria.getUrlParameters());
  }

  list(): Observable<MantenimientoModule[]> {
    return this.http.get<MantenimientoModule[]>(this.resourceUrl);
  }

  create(recurso: MantenimientoModule): Observable<MantenimientoModule> {
    return this.http.post<MantenimientoModule>(this.resourceUrl, recurso, httpOptions);
  }

  update(recurso: MantenimientoModule): Observable<MantenimientoModule> {
    return this.http.put<MantenimientoModule>(this.resourceUrl, recurso, httpOptions);
  }

  detail(id: number): Observable<MantenimientoModule> {
    return this.http.get<MantenimientoModule>(this.resourceUrl + '/' + id);
  }

  delete(id: number): Observable<MantenimientoModule> {
    return this.http.delete<MantenimientoModule>(this.resourceUrl + '/' + id);
  }
  
}
