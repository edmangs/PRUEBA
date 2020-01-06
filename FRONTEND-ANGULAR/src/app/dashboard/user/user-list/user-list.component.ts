import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDatasource } from '../services/User.datasource';
import { UserCriteria } from '../models/user.criteria.model';
import { MatPaginator, MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { UserService } from '../services/USer.service';
import { TranslateService } from '@ngx-translate/core';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserModel } from '../models/user.model';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserDeleteComponent } from '../user-delete/user-delete.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public dataSource: UserDatasource;
  public criteria = new UserCriteria();  

  public columns = [
    'lastName',
    'firstName',
    'email',
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private servicio: UserService,
    private dialog: MatDialog,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.dataSource = new UserDatasource(this.servicio);
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

  edit(user: UserModel){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'edit-modalbox';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = user;
    dialogConfig.width = '70%';

    const dialogRef = this.dialog.open(UserEditComponent, dialogConfig);

    dialogRef.beforeClosed().subscribe(val => {
      if (val == 1) {
        this.loadData();
      }
    });
  }

  delete(user: UserModel){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = user;

    const dialogRef = this.dialog.open(UserDeleteComponent, dialogConfig);

    dialogRef.beforeClosed().subscribe(
      val => {
        if (val) {
          this.loadData();
        }
      }
    );
  }

  detail(user: UserModel){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'edit-modalbox';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = user;
    dialogConfig.width = '70%';

    const dialogRef = this.dialog.open(UserDetailComponent, dialogConfig);
  }

}
