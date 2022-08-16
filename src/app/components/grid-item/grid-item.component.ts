import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss'],
})
export class GridItemComponent implements OnInit {
  @Input() category: string = '';

  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  isMenuOpen: boolean = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        (this.toggleButton &&
          this.toggleButton.nativeElement.contains(e.target)) ||
        (this.menu && this.menu.nativeElement.contains(e.target))
      ) {
        this.isMenuOpen = true;
      } else {
        this.isMenuOpen = false;
      }
    });
  }

  ngOnInit(): void {}

  openMenu() {
    this.isMenuOpen = true;
  }
}
