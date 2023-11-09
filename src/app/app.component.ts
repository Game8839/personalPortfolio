import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  title = 'personalPortfolio';
  selectedMenu = 'introduction';

  setSelectedMenu(menu) {
    this.selectedMenu = menu;
  }
  ngOnInit(): void {
    console.log(this.route.component);
    this.route.queryParams.subscribe((e) => console.log(e));
  }
}
