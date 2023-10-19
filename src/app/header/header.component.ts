import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { menu } from '../models/menu';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  @Output() eventEmitter = new EventEmitter();
  selectedMenu;

  ngOnInit(): void {
    console.log();
    this.selectedMenu = this.router.getCurrentNavigation();
  }
}
