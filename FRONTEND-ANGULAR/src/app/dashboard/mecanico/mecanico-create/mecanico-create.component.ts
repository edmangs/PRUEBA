import { Component, OnInit } from '@angular/core';
import { MecanicoService } from '../services/mecanico.service';
import { MecanicoModel } from '../models/mecanico.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { UtilService } from 'src/app/shared/service/util.service';
import { ConfirmComponent } from 'src/app/shared/component/confirm/confirm.component';

@Component({
  selector: 'app-mecanico-create',
  templateUrl: './mecanico-create.component.html',
  styleUrls: ['./mecanico-create.component.scss']
})
export class MecanicoCreateComponent implements OnInit {

  public tipoDocumentos = [
    { name: 'form.tipoDocumento.cc', value: 'CC' },
    { name: 'form.tipoDocumento.ce', value: 'CE' },
    { name: 'form.tipoDocumento.ps', value: 'PS' }
  ];

  public estados = [
    { name: 'form.estado.activo', value: 'A' },
    { name: 'form.estado.inactivo', value: 'I' },
  ];

  public disableSubmit: boolean = false;
  public object: MecanicoModel = new MecanicoModel();
  public form: FormGroup;

  constructor(
    private servicio: MecanicoService,
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
    this.servicio.create(this.object).subscribe(
      data => {
        this.snackBar.open('¡Se creo el registro con exito!', 'X', {
          duration: 5000,
          panelClass: ['success-snackbar']
        });
        this.router.navigate(["/dashboard/mecanico/admin"]);
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
        this.router.navigate(["/dashboard/mecanico/admin"]);
      }
    });
  }

}
