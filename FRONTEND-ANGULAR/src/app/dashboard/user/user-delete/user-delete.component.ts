import { Component, OnInit, Inject } from '@angular/core';
import { UserModel } from '../models/user.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/USer.service';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  public user: UserModel;
  public disabledSubmit = false;
  public form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UserDeleteComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: UserModel,
    private servicio: UserService,
    private snackBar: MatSnackBar,
    private utilitiesService: UtilService
  ) {
    this.user = data;

    this.form = formBuilder.group({ id: [this.user.id, Validators.required] });
  }

  ngOnInit() {
  }

  close () {
    this.dialogRef.close(0);
  }

  save () {
    this.disabledSubmit = true;
    this.servicio.delete(this.user.id).subscribe(
      data => {
        this.dialogRef.close(this.user.id);
        this.snackBar.open('¡Se elimino el elemento!', 'X', {
          duration: 10000,
          panelClass: ['success-snackbar']
        });
      },
      error => {
        this.disabledSubmit = false;
        this.utilitiesService.formErrorMessages(error, this.form, this.snackBar); 
      }
    );
  }

}
