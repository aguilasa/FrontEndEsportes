import { RouterModule, Routes } from '@angular/router';

import { TipoComponent } from './components/tipo/tipo.component';
import { ModalidadeComponent } from './components/modalidade/modalidade.component';
import { SituacaoComponent } from './components/situacao/situacao.component';
import { TimeComponent } from './components/time/time.component';
import { FaseComponent } from './components/fase/fase.component';
import { JogoComponent } from './components/jogo/jogo.component';



const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'tipo', component: TipoComponent },
    { path: 'modalidade', component: ModalidadeComponent },
    { path: 'situacao', component: SituacaoComponent },
    { path: 'time', component: TimeComponent },
    { path: 'fase', component: FaseComponent },
    { path: 'jogo', component: JogoComponent }
];

export const RoutingModule = RouterModule.forRoot(routes);