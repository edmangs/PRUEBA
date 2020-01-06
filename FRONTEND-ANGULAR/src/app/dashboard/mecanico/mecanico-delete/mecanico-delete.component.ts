import { Component, OnInit, Inject } from '@angular/core';
import { MecanicoModel } from '../models/mecanico.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { MecanicoService } from '../services/mecanico.service';
import { UtilService } from 'src/app/shared/service/util.service';

@Component({
  selector: 'app-mecanico-delete',
  templateUrl: './mecanico-delete.component.html',
  styleUrls: ['./mecanico-delete.component.scss']
})
export class MecanicoDeleteComponent implements OnInit {

  public object: MecanicoModel;
  public disabledSubmit = false;
  public form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<MecanicoDeleteComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: MecanicoModel,
    private servicio: MecanicoService,
    private snackBar: MatSnackBar,
    private utilitiesService: UtilService
  ) {
    this.object = data;

    this.form = formBuilder.group({ id: [this.object.id, Validators.required] });
  }

  ngOnInit() {
  }

  close () {
    this.dialogRef.close(0);
  }

  save () {
    this.disabledSubmit = true;
    this.servicio.delete(this.object.id).subscribe(
      data => {
        this.dialogRef.close(this.object.id);
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
