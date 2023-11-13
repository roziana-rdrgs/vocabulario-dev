import { Title, Meta } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  constructor(private titleService: Title, private metaService: Meta){

    this.titleService.setTitle("Vocabulário Dev - Sobre");
    this.metaService.addTag({name: 'description', content: 'Um pouco mais sobre o Vocabulário Dev'} );
    this.metaService.addTag({name: 'author', content: 'Roziana Rodrigues'}, );
    this.metaService.addTag({name: 'keywords', content: 'Programação, Código, Angular, Git, Figma, Desenvolvedor Pleno, .NET Core, API, REST, Front End, Back End, Open Source, Roziana, Ane'} );
    this.metaService.addTag({name: 'revisit-after', content: '2'} );
    this.metaService.addTag({name: 'rating', content: 'General'} );
  }
}
