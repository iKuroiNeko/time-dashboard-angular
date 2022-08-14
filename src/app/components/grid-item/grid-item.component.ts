import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  @Input() category: string = '';

  menu: boolean = false

  constructor() { }

  ngOnInit(): void {
  
  }

  openMenu() {
    this.menu = !this.menu;

  }

}
