import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TipoModel } from '../../../models/tipo/tipo-model';
import { TipoService } from '../../../services/tipo/tipo.service';

@Component({
  selector: 'app-tipo-novo',
  templateUrl: './tipo-novo.component.html',
  styleUrls: ['./tipo-novo.component.css']
})
export class TipoNovoComponent implements OnInit {

  model = new TipoModel('');

  constructor(private tipoSvc: TipoService, private router: Router) { }

  ngOnInit() {
  }

  addTipo() {
    this.tipoSvc
      .addTipo(this.model)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.router.navigate(['/tipo']);
  }

  isValidForm() {
    return this.model.nome !== '';
  }

}
