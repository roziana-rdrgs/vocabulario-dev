import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.sass']
})
export class CoverPageComponent {

  @Input() coverImage: string = '';
  @Input() pageTitle: string = '';
  @Input() pageSubtitle: string = '';
  @Input() displayLogo: boolean = false;
  @Input() displayProfileImage: boolean = false;
}
