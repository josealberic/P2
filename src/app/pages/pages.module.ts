import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule} from '../shared/shared.module';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports:[
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
