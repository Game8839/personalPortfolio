import { Component } from '@angular/core';

@Component({
  selector: 'my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css'],
})
export class MyProjectsComponent {
  projects = ['eCommerse', 'oreo'];
}
