import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/primeng';
import { SituacaoService } from '../../services/situacao.service';
import { Situacao } from '../../models/situacao';

@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.css'],
  providers: [SituacaoService]
})
export class SituacaoComponent implements OnInit {

  situacoes: Situacao[];
  mostrarDialogo: boolean;
  situacao: Situacao = new Situacao();
  selecionado: Situacao;
  novoSituacao: boolean;

  constructor(private situacaoSvc: SituacaoService) { }

  ngOnInit() {
    this.situacaoSvc.getSituacaos().then(situacoes => {
      this.situacoes = situacoes
    });
  }

  mostrarDialogoIncluir() {
    this.novoSituacao = true;
    this.situacao = new Situacao();
    this.mostrarDialogo = true;
  }

  salvar() {
    let situacoes = [...this.situacoes];

    if (this.novoSituacao) {
      this.situacaoSvc.addSituacao(this.situacao).then(res => {
        this.situacao = res;
        situacoes.push(this.situacao);
        this.finalizar(situacoes);
      });
    }
    else {
      this.situacaoSvc.updSituacao(this.situacao).then(res => {
        let index = this.procurarSituacaoSelecionado();
        this.situacao = res;
        situacoes[index] = this.situacao;
        this.finalizar(situacoes);
      });
    }
  }

  private finalizar(situacoes) {
    this.situacoes = situacoes;
    this.situacao = null;
    this.mostrarDialogo = false;
  }

  deletar() {
    this.situacaoSvc.delSituacao(this.situacao).then(() => {
      let index = this.procurarSituacaoSelecionado();
      this.situacoes = this.situacoes.filter((val, i) => i != index);
      this.situacao = null;
      this.mostrarDialogo = false;
    });
  }

  onRowSelect(event) {
    this.novoSituacao = false;
    this.situacao = this.clonarSituacao(event.data);
    this.mostrarDialogo = true;
  }

  clonarSituacao(t: Situacao): Situacao {
    let situacao = new Situacao();
    for (let prop in t) {
      situacao[prop] = t[prop];
    }
    return situacao;
  }

  procurarSituacaoSelecionado(): number {
    return this.situacoes.indexOf(this.selecionado);
  }

}
