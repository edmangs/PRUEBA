import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/USer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmComponent } from 'src/app/shared/component/confirm/confirm.component';
import { UserModel } from '../models/user.model';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  public disableSubmit: boolean = false;
  public user: UserModel = new UserModel();
  public form: FormGroup;

  constructor(
    private servicio: UserService,
    private router: Router,
    public formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private utilService: UtilService
  ) { 
    this.setForm();
  }

  setForm(){
    this.form = this.formBuilder.group({
      lastName: [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      firstName: [null, Validators.compose([Validators.required, Validators.maxLength(255)])],
      email: [null, Validators.compose([Validators.required, Validators.maxLength(255), Validators.email])],
      age: [null, Validators.compose([])],
    });
  }

  ngOnInit() {
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

  onSubmit(){
    this.markAndValidateAllInputs(this.form);
    this.disableSubmit = true;

    if (this.form.valid == true) {
      this.disableSubmit = true;
      this.save();
    } else {
      this.disableSubmit = false;
      this.snackBar.open('Favor revise el formulario', 'X', {
        duration: 5000,
        panelClass: ['warning-snackbar']
      });
    }
  }

  save() {
    this.servicio.create(this.user).subscribe(
      data => {
        this.snackBar.open('¡Se creo el registro con exito!', 'X', {
          duration: 5000,
          panelClass: ['success-snackbar']
        });
        this.router.navigate(["/dashboard/usuario/admin"]);
      },
      error => {
        this.disableSubmit = false;
        this.utilService.formErrorMessages(error, this.form, this.snackBar);
      }
    );
  }

  onBack(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-modalbox';
    dialogConfig.width = '30%';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(ConfirmComponent, dialogConfig);

    dialogRef.beforeClosed().subscribe(val => {
      if (val == 1) {
        this.router.navigate(["/dashboard/usuario/admin"]);
      }
    });
  }

}
