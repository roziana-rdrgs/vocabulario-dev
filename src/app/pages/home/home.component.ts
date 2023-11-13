import { Title, Meta } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  selector: 'app-home'
})
export class HomeComponent {
  public pageSubtitle: string;

  constructor(private titleService: Title, private metaService: Meta){

    this.titleService.setTitle("Vocabulário Dev - Home");
    this.metaService.addTag({name: 'description', content: 'Vocabuláio Dev - Acompanhe os novos posts'} );
    this.metaService.addTag({name: 'author', content: 'Roziana Rodrigues'}, );
    this.metaService.addTag({name: 'keywords', content: 'Programação, Código, Angular, Git, Figma, Desenvolvedor Pleno, .NET Core, API, REST, Front End, Back End, Open Source'} );
    this.metaService.addTag({name: 'revisit-after', content: '2'} );
    this.metaService.addTag({name: 'rating', content: 'General'} );

  this.pageSubtitle = "substantivo 1.conjunto de termos que são característicos de determinado campo de conhecimento ou atividade, e sua codificação, " +
    "com ou sem definições; glossário. \"v. médico\" 2.conjunto dos vocábulos de uma língua; léxico.";
  }
}
