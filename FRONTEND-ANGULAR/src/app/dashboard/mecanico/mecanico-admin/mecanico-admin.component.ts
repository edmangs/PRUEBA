import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mecanico-admin',
  templateUrl: './mecanico-admin.component.html',
  styleUrls: ['./mecanico-admin.component.scss']
})
export class MecanicoAdminComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  create(){
    this.router.navigate(["/dashboard/mecanico/create"]);
  }
}
