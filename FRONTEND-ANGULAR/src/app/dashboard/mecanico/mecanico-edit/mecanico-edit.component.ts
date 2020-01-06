import { Component, OnInit, Inject } from '@angular/core';
import { MecanicoModel } from '../models/mecanico.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MecanicoService } from '../services/mecanico.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig } from '@angular/material';
import { UtilService } from 'src/app/shared/service/util.service';
import { ConfirmComponent } from 'src/app/shared/component/confirm/confirm.component';

@Component({
  selector: 'app-mecanico-edit',
  templateUrl: './mecanico-edit.component.html',
  styleUrls: ['./mecanico-edit.component.scss']
})
export class MecanicoEditComponent implements OnInit {

  public tipoDocumentos = [
    { name: 'form.tipoDocumento.cc', value: 'CC' },
    { name: 'form.tipoDocumento.ce', value: 'CE' },
    { name: 'form.tipoDocumento.ps', value: 'PS' }
  ];

  public estados = [
    { name: 'form.estado.activo', value: 'A' },
    { name: 'form.estado.inactivo', value: 'I' },
  ];

  public object: MecanicoModel;
  public form: FormGroup;
  public disableSubmit = false;

  constructor(
    private servicio: MecanicoService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<MecanicoEditComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: MecanicoModel,
    private dialog: MatDialog,
    private utilService: UtilService,
  ) {
    this.object = data;

    this.setForm();
  }

  setForm() {
    this.form = this.formBuilder.group({
      tipoDocumento: [null, Validators.compose([Validators.required])],
      documento: [null, Validators.compose([Validators.required])],
      primerNombre: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      segundoNombre: [null, Validators.compose([Validators.maxLength(30)])],
      primerApellido: [null, Validators.compose([Validators.required, Validators.maxLength(30)])],
      segundoApellido: [null, Validators.compose([Validators.maxLength(30)])],
      celular: [null, Validators.compose([Validators.required, Validators.maxLength(10)])],
      direccion: [null, Validators.compose([Validators.required, Validators.maxLength(200)])],
      email: [null, Validators.compose([Validators.required, Validators.maxLength(100), Validators.email])],
      estado: [null, Validators.compose([Validators.required])],
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
    this.servicio.update(this.object).subscribe(
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
