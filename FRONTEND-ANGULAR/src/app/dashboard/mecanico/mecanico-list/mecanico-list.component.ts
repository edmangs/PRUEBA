import { Component, OnInit, ViewChild } from '@angular/core';
import { MecanicoDatasource } from '../../mecanico/services/mecanico.datasource';
import { MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { MecanicoCriteria } from '../models/mecanico.criteria.model';
import { MecanicoService } from '../services/mecanico.service';
import { MecanicoEditComponent } from '../mecanico-edit/mecanico-edit.component';
import { MecanicoDeleteComponent } from '../mecanico-delete/mecanico-delete.component';
import { MecanicoModel } from '../models/mecanico.model';
import { MecanicoDetailComponent } from '../mecanico-detail/mecanico-detail.component';

@Component({
  selector: 'app-mecanico-list',
  templateUrl: './mecanico-list.component.html',
  styleUrls: ['./mecanico-list.component.scss']
})
export class MecanicoListComponent implements OnInit {

  public dataSource: MecanicoDatasource;
  public criteria = new MecanicoCriteria();  

  public columns = [
    'tipoDocumento',
    'documento',
    'primerNombre',
    'segundoNombre',
    'primerApellido',
    'segundoApellido',
    'celular',
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private servicio: MecanicoService,
    private dialog: MatDialog,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.dataSource = new MecanicoDatasource(this.servicio);
    this.loadData();
  }

  search(): void {
    this.paginator.pageIndex = 0;
    this.criteria.page = 0;
    this.loadData();
  }

  loadData(): void {
    this.dataSource.loadData(this.criteria);
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(() => {
      this.criteria.page = this.paginator.pageIndex;
      this.criteria.size = this.paginator.pageSize;
      this.loadData();
    });

    this.sort.sortChange.subscribe(() => {
      this.criteria.sortBy = this.sort.active;
      this.criteria.sortOrder = this.sort.direction || 'asc';
      this.loadData();
    });
  }

  clear(){
    this.paginator.pageIndex = 0;
    this.criteria.page = 0;
    const noLimpiar = ['page', 'size', 'sortBy', 'sortOrder', 'getUrlParameters'];
    for (const key in this.criteria) {
      if (!noLimpiar.includes(key)) {
        this.criteria[key] = '';
      }
    }
    this.paginator.pageIndex = 0;
    this.loadData();
  }

  edit(user: MecanicoModel){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'edit-modalbox';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = user;
    dialogConfig.width = '70%';

    const dialogRef = this.dialog.open(MecanicoEditComponent, dialogConfig);

    dialogRef.beforeClosed().subscribe(val => {
      if (val == 1) {
        this.loadData();
      }
    });
  }

  delete(user: MecanicoModel){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = user;

    const dialogRef = this.dialog.open(MecanicoDeleteComponent, dialogConfig);

    dialogRef.beforeClosed().subscribe(
      val => {
        if (val) {
          this.loadData();
        }
      }
    );
  }

  detail(user: MecanicoModel){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'edit-modalbox';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = user;
    dialogConfig.width = '70%';

    const dialogRef = this.dialog.open(MecanicoDetailComponent, dialogConfig);
  }

}
