import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

//servicios
import { SharedService } from "./shared.service";
import { SettingsService } from "./settings.service";
import { SidebarService } from "./sidebar.service";

@NgModule({
  imports: [
    FormsModule,
    CommonModule 
  ],
  providers: [
    SharedService,
    SettingsService,
    SidebarService]
})
export class ServiceModule { }
