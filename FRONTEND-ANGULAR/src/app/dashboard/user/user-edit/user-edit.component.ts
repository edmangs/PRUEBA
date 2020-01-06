import { Component, OnInit, Inject } from '@angular/core';
import { UserModel } from '../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/USer.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material';
import { UtilService } from 'src/app/shared/service/util.service';
import { ConfirmComponent } from 'src/app/shared/component/confirm/confirm.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  public user: UserModel;
  public form: FormGroup;
  public disableSubmit = false;

  constructor(
    private servicio: UserService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UserEditComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: UserModel,
    private dialog: MatDialog,
    private utilService: UtilService,
  ) {
    this.user = data;

    this.setForm();
  }

  setForm() {
    this.form = this.formBuilder.group({
      lastName: [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      firstName: [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      email: [null, Validators.compose([Validators.required, Validators.maxLength(255), Validators.email])],
      age: [null, Validators.compose([])],
      id: [null, Validators.compose([])],
    });
  }

  close() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-modalbox';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    const dialogRef = this.dialog.open(ConfirmComponent, dialogConfig);

    dialogRef.beforeClosed().subscribe(val => {
      if (val == 1) {
        this.dialogRef.close();
      }
    });
  }

  ngOnInit() {
  }

  save() {
    this.servicio.update(this.user).subscribe(
      data => {
        this.dialogRef.close(this.form.value);
        this.snackBar.open('¡Se actualizaron los datos con exito!', 'X', {
          duration: 5000,
          panelClass: ['success-snackbar']
        });
      },
      error => {
        this.disableSubmit = false;
        this.utilService.formErrorMessages(error, this.form, this.snackBar);
      }
    );
  }

  onSubmit() {
    this.markAndValidateAllInputs(this.form);
    this.disableSubmit = true;
    if (this.form.valid == true) {
      this.disableSubmit = true;
      this.save();
    } else {
      this.disableSubmit = false;
      this.snackBar.open('Favor revise el formulario', 'X', {
        duration: 10000,
        panelClass: ['warning-snackbar']
      });
    }
  }

  /**
   * Marks all controls in a form group as touched and validate
   * @param formGroup - The form group to touch
   */
  private markAndValidateAllInputs(anyForm: FormGroup) {
    for (let inner in anyForm.controls) {
      anyForm.get(inner).markAsTouched();
      anyForm.get(inner).updateValueAndValidity();
    }
  }

  onBack(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-modalbox';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '30%';
    const dialogRef = this.dialog.open(ConfirmComponent, dialogConfig);

    dialogRef.beforeClosed().subscribe(val => {
      if (val == 1) {
        this.dialogRef.close();
      }
    });
  }

}
