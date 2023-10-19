import { Component, OnInit } from '@angular/core';
import { TTask } from './todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  tasks: TTask[] = [];

  ngOnInit(): void {}
  onAddTask(task: TTask) {
    this.tasks.push(task);
  }
}
