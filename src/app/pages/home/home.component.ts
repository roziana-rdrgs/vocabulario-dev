import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  selector: 'app-home'
})
export class HomeComponent {
  public pageSubtitle: string;
  constructor(){
    this.pageSubtitle = "substantivo 1.conjunto de termos que são característicos de determinado campo de conhecimento ou atividade, e sua codificação, " +
      "com ou sem definições; glossário. \"v. médico\" 2.conjunto dos vocábulos de uma língua; léxico.";
  }

}
