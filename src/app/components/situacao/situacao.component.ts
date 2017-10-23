import { Component, OnInit } from '@angular/core';
import { PanelModule, MenuItem, Message, ConfirmationService } from 'primeng/primeng';
import { SituacaoService } from '../../services/situacao.service';
import { Situacao } from '../../models/situacao';

@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.css'],
  providers: [SituacaoService, ConfirmationService]
})
export class SituacaoComponent implements OnInit {

  items: MenuItem[];
  situacoes: Situacao[];
  mostrarDialogo: boolean;
  situacao: Situacao = new Situacao();
  selecionado: Situacao;
  novoSituacao: boolean;

  constructor(private situacaoSvc: SituacaoService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.situacaoSvc.getSituacaos().then(situacoes => {
      this.situacoes = situacoes
    });

    this.items = [
      { label: 'Visualizar', icon: 'fa-search', command: (event) => this.mostrar(this.selecionado) },
      { label: 'Excluir', icon: 'fa-close', command: (event) => this.confirmar() }
    ];
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
    this.situacaoSvc.delSituacao(this.selecionado).then(() => {
      let index = this.procurarSituacaoSelecionado();
      this.situacoes = this.situacoes.filter((val, i) => i != index);
      this.situacao = null;
      this.mostrarDialogo = false;
    });
  }

  confirmar() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir o registro?',
      accept: () => {
        this.deletar();
      }
    });
  }

  onRowSelect(event) {
    this.mostrar(event.data);
  }

  setarSituacao(situacao: Situacao) {
    this.novoSituacao = false;
    this.situacao = this.clonarSituacao(situacao);
  }

  mostrar(situacao: Situacao) {
    this.setarSituacao(situacao);
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
