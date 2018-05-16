import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule} from '../shared/shared.module';
import { PagesComponent } from './pages/pages.component';

//incrementador
import {IncrementadorComponent} from '../components/incrementador/incrementador.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent
  ],
  imports:[
    SharedModule,
    PagesRoutingModule,
    ChartsModule
  ]
})
export class PagesModule { }
