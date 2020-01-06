import { Component, OnInit } from '@angular/core';
import { MantenimientoModel } from '../models/mantenimiento.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MantenimientoService } from '../services/mantenimiento.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { UtilService } from 'src/app/shared/service/util.service';
import { ConfirmComponent } from 'src/app/shared/component/confirm/confirm.component';
import { MecanicoModel } from '../../mecanico/models/mecanico.model';
import { MecanicoService } from '../../mecanico/services/mecanico.service';

@Component({
  selector: 'app-mantenimiento-create',
  templateUrl: './mantenimiento-create.component.html',
  styleUrls: ['./mantenimiento-create.component.scss']
})
export class MantenimientoCreateComponent implements OnInit {

  public mecanicos: Array<MecanicoModel> = [];
  public disableSubmit: boolean = false;
  public object: MantenimientoModel = new MantenimientoModel();
  public form: FormGroup;

  constructor(
    private servicio: MantenimientoService,
    private router: Router,
    public formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private utilService: UtilService,
    private mecanicoService: MecanicoService
  ) { 
    this.setForm();
  }

  setForm(){
    this.form = this.formBuilder.group({
      mecanico: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.mecanicoService.mecanicosDisponibles().subscribe((items: Array<MecanicoModel>) => {
      this.mecanicos = items;
    });

    this.object.fecha = this.utilService.convertDateToString(new Date(), "DD-MM-YYYY");
    this.object.codigo = this.utilService.convertDateToString(new Date(), "YYYYMMDDHHSS");
    
    this.object.estado = 1;
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
        this.router.navigate(["/dashboard/mantenimiento/admin"]);
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
        this.router.navigate(["/dashboard/mantenimiento/admin"]);
      }
    });
  }

}
