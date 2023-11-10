import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {

  public itemHovered: boolean = false
  @Input() postTitle: string = '';
  @Input() postDescription: string = '';
  @Input() postImage: string = '';
  @Input() postLink: string = '';

  hoverListItem(hovered: boolean) {
    this.itemHovered = hovered;
    return this.itemHovered;
 }
}
