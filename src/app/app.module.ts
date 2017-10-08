import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavegacaoComponent } from './componentes/navegacao/navegacao.component';
import { HomeComponent } from './componentes/home/home.component';
import { JogoListComponent } from './componentes/jogo/jogo-list/jogo-list.component';
import { JogoNovoComponent } from './componentes/jogo/jogo-novo/jogo-novo.component';
import { JogoEditarComponent } from './componentes/jogo/jogo-editar/jogo-editar.component';
import { TipoListComponent } from './componentes/tipo/tipo-list/tipo-list.component';
import { TipoNovoComponent } from './componentes/tipo/tipo-novo/tipo-novo.component';
import { TipoEditarComponent } from './componentes/tipo/tipo-editar/tipo-editar.component';
import { ModalidadeListComponent } from './componentes/modalidade/modalidade-list/modalidade-list.component';
import { ModalidadeNovoComponent } from './componentes/modalidade/modalidade-novo/modalidade-novo.component';
import { ModalidadeEditarComponent } from './componentes/modalidade/modalidade-editar/modalidade-editar.component';
import { SituacaoListComponent } from './componentes/situacao/situacao-list/situacao-list.component';
import { SituacaoNovoComponent } from './componentes/situacao/situacao-novo/situacao-novo.component';
import { SituacaoEditarComponent } from './componentes/situacao/situacao-editar/situacao-editar.component';
import { TimeListComponent } from './componentes/time/time-list/time-list.component';
import { TimeNovoComponent } from './componentes/time/time-novo/time-novo.component';
import { TimeEditarComponent } from './componentes/time/time-editar/time-editar.component';
import { FaseListComponent } from './componentes/fase/fase-list/fase-list.component';
import { FaseNovoComponent } from './componentes/fase/fase-novo/fase-novo.component';
import { FaseEditarComponent } from './componentes/fase/fase-editar/fase-editar.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tipo', component: TipoListComponent },
  { path: 'tipo/novo', component: TipoNovoComponent },
  { path: 'tipo/editar/:id', component: TipoEditarComponent },
  { path: 'jogo', component: JogoListComponent },
  { path: 'jogo/novo', component: JogoNovoComponent },
  { path: 'jogo/editar/:id', component: JogoEditarComponent },
  { path: 'modalidade', component: ModalidadeListComponent },
  { path: 'modalidade/novo', component: ModalidadeNovoComponent },
  { path: 'modalidade/editar/:id', component: ModalidadeEditarComponent },
  { path: 'time', component: TimeListComponent },
  { path: 'time/novo', component: TimeNovoComponent },
  { path: 'time/editar/:id', component: TimeEditarComponent },
  { path: 'fase', component: FaseListComponent },
  { path: 'fase/novo', component: FaseNovoComponent },
  { path: 'fase/editar/:id', component: FaseEditarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TipoListComponent,
    NavegacaoComponent,
    HomeComponent,
    JogoListComponent,
    JogoNovoComponent,
    JogoEditarComponent,
    TipoNovoComponent,
    TipoEditarComponent,
    ModalidadeListComponent,
    ModalidadeNovoComponent,
    ModalidadeEditarComponent,
    SituacaoListComponent,
    SituacaoNovoComponent,
    SituacaoEditarComponent,
    TimeListComponent,
    TimeNovoComponent,
    TimeEditarComponent,
    FaseListComponent,
    FaseNovoComponent,
    FaseEditarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
