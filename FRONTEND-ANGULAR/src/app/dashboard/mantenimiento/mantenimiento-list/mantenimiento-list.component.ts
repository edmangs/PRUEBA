import { Component, OnInit, ViewChild } from '@angular/core';
import { MantenimientoDatasource } from '../services/mantenimiento.datasource';
import { MantenimientoCriteria } from '../models/mantenimiento.criteria.model';
import { MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { MantenimientoService } from '../services/mantenimiento.service';
import { TranslateService } from '@ngx-translate/core';
import { MantenimientoModel } from '../models/mantenimiento.model';

@Component({
  selector: 'app-mantenimiento-list',
  templateUrl: './mantenimiento-list.component.html',
  styleUrls: ['./mantenimiento-list.component.scss']
})
export class MantenimientoListComponent implements OnInit {

  public dataSource: MantenimientoDatasource;
  public criteria = new MantenimientoCriteria();  

  public columns = [
    'codigo',
    'estado',
    'fecha',
    'mecanico'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private servicio: MantenimientoService,
    private dialog: MatDialog,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.dataSource = new MantenimientoDatasource(this.servicio);
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

}
