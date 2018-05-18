import { Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import { SettingsService } from '../../services/settings.service';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public settingService:SettingsService) { }

  ngOnInit() {
  }

  public cambiarcolor(tema:string, link:any){
    this.aplicarCheck(link);
    this.settingService.aplicarTema(tema);
  }

  public aplicarCheck(link:any){
  let selectores:any= document.getElementsByClassName('selector');
  for(let ref of selectores){
    ref.classList.remove('working');
  }

  link.classList.add('working');
  }
 public colocarCheck(){
  let selectores:any= document.getElementsByClassName('selector');
  let tema= this.settingService.ajustes.tema;
  for(let ref of selectores){
    if(ref.getAttribute('data-theme')===tema){
      ref.classList.add('working');
      break;
    }
  }
 }
}
