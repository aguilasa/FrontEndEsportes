import { RouterModule, Routes } from '@angular/router';

import { TipoComponent } from './components/tipo/tipo.component';


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'tipo', component: TipoComponent }
];

export const RoutingModule = RouterModule.forRoot(routes);