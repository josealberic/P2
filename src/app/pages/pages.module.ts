import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//pages

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages/pages.component';
import { PromesasComponent } from './promesas/promesas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
//modulos
import { ServiceModule  } from "../services/service.module";
import { SharedModule} from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routes';
//componentes
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/graficoauxiliar/grafico-dona.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    AccountSettingsComponent,
    GraficoDonaComponent,
    PromesasComponent,
    RxjsComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,

  ],
  imports:[
    SharedModule,
    PagesRoutingModule,
    ChartsModule,
    FormsModule,
    ServiceModule
  ]
})
export class PagesModule { }
