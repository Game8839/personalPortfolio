import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css'],
})
export class MyProjectsComponent {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}
  projects = ['ecommerce', 'oreo', 'todolist'];
}
