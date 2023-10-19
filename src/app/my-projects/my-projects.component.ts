import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css'],
})
export class MyProjectsComponent {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}
  projects = ['ECommerce', 'Oreo', 'TodoList'];
  selectedProject: string = this.projects[0];

  onSelect(project: string) {
    this.selectedProject = project;
    this.route.navigate([project.toLowerCase()], {
      relativeTo: this.activatedRoute,
    });
  }
}
