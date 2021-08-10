import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-image',
  templateUrl: './text-image.component.html',
  styleUrls: ['./text-image.component.scss']
})
export class TextImageComponent {
  @Input() title: string = "";
  @Input() text: string = "";
  @Input() image: string = "";
  @Input() position: string = "";
  @Input() link: string = "";
}
