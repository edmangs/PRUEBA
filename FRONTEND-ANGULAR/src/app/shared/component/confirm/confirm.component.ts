import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  public titulo = '';
  public mensaje = '';

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
  ) {
    this.titulo = 'all.confirm.title';
    this.mensaje = 'all.confirm.message';

    if (data) {
      if (typeof data.titulo != 'undefined') {
        this.titulo = data.titulo;
      }
      if (typeof data.mensaje != 'undefined') {
        this.mensaje = data.mensaje;
      }
    }
  }

  ngOnInit() {
  }

  close () {
    this.dialogRef.close(0);
  }
  yes () {
    this.dialogRef.close(1);
  }

}
