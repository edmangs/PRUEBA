import { Component, OnInit, Inject } from '@angular/core';
import { MecanicoModel } from '../models/mecanico.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserDetailComponent } from '../../user/user-detail/user-detail.component';

@Component({
  selector: 'app-mecanico-detail',
  templateUrl: './mecanico-detail.component.html',
  styleUrls: ['./mecanico-detail.component.scss']
})
export class MecanicoDetailComponent implements OnInit {

  public object: MecanicoModel;

  constructor(
    private dialogRef: MatDialogRef<UserDetailComponent>,
    @Inject(MAT_DIALOG_DATA) data: MecanicoModel
  ) {
    this.object = data;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
