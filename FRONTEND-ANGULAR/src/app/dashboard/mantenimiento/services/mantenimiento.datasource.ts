import { DataSource } from '@angular/cdk/table';
import { Observable, BehaviorSubject } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { MantenimientoModel } from '../models/mantenimiento.model';
import { MantenimientoCriteria } from '../models/mantenimiento.criteria.model';
import { MantenimientoService } from './mantenimiento.service';

export class MantenimientoDatasource implements DataSource<MantenimientoModel> {
  
  private usuarioSubject = new BehaviorSubject<MantenimientoModel[]>([]);
  public totalelementsSubject = new BehaviorSubject<number>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<boolean>(false);
  private errorMessageSubject = new BehaviorSubject<string>('');

  public totalElements$ = this.totalelementsSubject.asObservable();
  public loading$ = this.loadingSubject.asObservable();
  public error$ = this.errorSubject.asObservable();
  public errorMessage$ = this.errorMessageSubject.asObservable();
  public petitionList = null;
  public usuarioData: any;

  constructor(
    private servicio: MantenimientoService
  ) {}

  connect(collectionViewer: CollectionViewer): Observable<MantenimientoModel[]> {
    return this.usuarioSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.usuarioSubject.complete();
    this.loadingSubject.complete();
    this.totalelementsSubject.complete();
    this.errorSubject.complete();
    this.errorMessageSubject.complete();
  }

  loadData(criteria: MantenimientoCriteria): void {
    this.loadingSubject.next(true);
    if (this.petitionList) {
      this.petitionList.unsubscribe();
    }
    this.petitionList = this.servicio.list().subscribe(
      async (data: any) => {
        let content = data; 
        if(data.content){
          content  = data.content;
        }

        const datosNuevos = content.map(async usuario => {
          return {
            ...usuario,
          };
        });

        Promise.all(datosNuevos).then(completed => {
          data.content = completed;
          this.usuarioData = completed;

          this.usuarioSubject.next(data.content);
          this.totalelementsSubject.next(data.totalElements ? data.totalElements : data.length );
          this.errorSubject.next(false);
          this.errorMessageSubject.next('');
          this.loadingSubject.next(false);
        });
      },
      error => {
        this.usuarioSubject.next([]);
        this.totalelementsSubject.next(0);
        this.errorSubject.next(true);
        this.errorMessageSubject.next(
          'all.notData'
        );
        this.loadingSubject.next(false);
      }
    );
  }
}
