import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  create(){
    this.router.navigate(["/dashboard/usuario/create"]);
  }

}
