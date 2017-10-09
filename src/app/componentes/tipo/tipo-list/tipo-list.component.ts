import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TipoService } from '../../../services/tipo/tipo.service';

@Component({
  selector: 'app-tipo-list',
  templateUrl: './tipo-list.component.html',
  styleUrls: ['./tipo-list.component.css']
})
export class TipoListComponent implements OnInit {
  tipos = [];

  constructor(private tipoSvc: TipoService, private router: Router) { }

  ngOnInit() {
    this.getTipos();
  }

  getTipos() {
    this.tipoSvc
      .getTipos()
      .subscribe(tipos => {
        this.tipos = tipos;
      });
  }

  newTipo() {
    this.router.navigate(['/tipo/novo']);
  }

}
