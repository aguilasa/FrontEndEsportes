import { Component, OnInit } from '@angular/core';
import { TipoService } from '../../../services/tipo/tipo.service';

@Component({
  selector: 'app-tipo-list',
  templateUrl: './tipo-list.component.html',
  styleUrls: ['./tipo-list.component.css']
})
export class TipoListComponent implements OnInit {
  tipos = [];

  constructor(private tipoSvc: TipoService) { }

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

}
