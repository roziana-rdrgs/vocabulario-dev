import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private titleService: Title, private metaService: Meta){

    this.titleService.setTitle("Vocabulário Dev");
    this.metaService.addTag({name: 'description', content: 'Projetos, Tutoriais e Hobbies de uma desenvolvedora de software'} );
    this.metaService.addTag({name: 'author', content: 'Roziana Rodrigues'}, );
    this.metaService.addTag({name: 'keywords', content: 'Programação, Código, Angular, Git, Figma, Desenvolvedor Pleno, .NET Core, API, REST, Front End, Back End, Open Source, Tutoriais, Projetos'} );
    this.metaService.addTag({name: 'revisit-after', content: '2'} );
    this.metaService.addTag({name: 'rating', content: 'General'} );
  }
}
