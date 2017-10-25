import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MenubarModule, MenuItem, PanelModule, InputTextModule, ButtonModule, DataTableModule, DialogModule, GrowlModule, ContextMenuModule,
  ConfirmDialogModule, DropdownModule, StepsModule, CheckboxModule
} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TipoComponent } from './components/tipo/tipo.component';


import { RoutingModule } from './routers-app';
import { ModalidadeComponent } from './components/modalidade/modalidade.component';
import { SituacaoComponent } from './components/situacao/situacao.component';
import { TimeComponent } from './components/time/time.component';
import { FaseComponent } from './components/fase/fase.component';
import { JogoComponent } from './components/jogo/jogo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TipoComponent,
    ModalidadeComponent,
    SituacaoComponent,
    TimeComponent,
    FaseComponent,
    JogoComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MenubarModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    DialogModule,
    GrowlModule,
    ContextMenuModule,
    ConfirmDialogModule,
    DropdownModule,
    StepsModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
