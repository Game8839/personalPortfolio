import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { menu } from '../models/menu';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter();
  selectedMenu = 'introduction';
  ngOnInit(): void {}

  selectMenu(menu) {
    this.selectedMenu = menu;
    this.eventEmitter.emit(this.selectedMenu);
  }
}
