import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CollectionResponse } from 'src/app/shared/models/collection.response';
import { MecanicoCriteria } from '../models/mecanico.criteria.model';
import { MecanicoModule } from '../mecanico.module';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {

  private resourceUrl: string;
  public roles = [];

  constructor(
    private http: HttpClient,
  ) {
    this.resourceUrl = `${environment.host}${environment.api}/mecanico`;
  }

  search(criteria: MecanicoCriteria): Observable<CollectionResponse<MecanicoModule>> {
    return this.http.get<CollectionResponse<MecanicoModule>>(this.resourceUrl + '/search?' + criteria.getUrlParameters());
  }

  list(): Observable<MecanicoModule[]> {
    return this.http.get<MecanicoModule[]>(this.resourceUrl);
  }

  mecanicosDisponibles(): Observable<MecanicoModule[]> {
    return this.http.get<MecanicoModule[]>(this.resourceUrl + '/mecanicosDisponibles');
  }

  create(recurso: MecanicoModule): Observable<MecanicoModule> {
    return this.http.post<MecanicoModule>(this.resourceUrl, recurso, httpOptions);
  }

  update(recurso: MecanicoModule): Observable<MecanicoModule> {
    return this.http.put<MecanicoModule>(this.resourceUrl, recurso, httpOptions);
  }

  detail(id: number): Observable<MecanicoModule> {
    return this.http.get<MecanicoModule>(this.resourceUrl + '/' + id);
  }

  delete(id: number): Observable<MecanicoModule> {
    return this.http.delete<MecanicoModule>(this.resourceUrl + '/' + id);
  }
  
}
