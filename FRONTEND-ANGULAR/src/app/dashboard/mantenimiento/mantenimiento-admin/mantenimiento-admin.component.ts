import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento-admin',
  templateUrl: './mantenimiento-admin.component.html',
  styleUrls: ['./mantenimiento-admin.component.scss']
})
export class MantenimientoAdminComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  create(){
    this.router.navigate(["/dashboard/mantenimiento/create"]);
  }

}
