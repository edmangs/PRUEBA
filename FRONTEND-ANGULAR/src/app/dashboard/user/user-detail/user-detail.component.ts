import { Component, OnInit, Inject } from '@angular/core';
import { UserModel } from '../models/user.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public user: UserModel;

  constructor(
    private dialogRef: MatDialogRef<UserDetailComponent>,
    @Inject(MAT_DIALOG_DATA) data: UserModel
  ) {
    this.user = data;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
