import { Component, OnInit } from '@angular/core';
import { TTask, TodoListService } from '../todolist.service';

@Component({
  selector: 'todolisttickets',
  templateUrl: './todolisttickets.component.html',
  styleUrls: ['./todolisttickets.component.css'],
})
export class TodolistticketsComponent implements OnInit {
  todoLists: TTask[] = [];
  constructor(private todolistService: TodoListService) {}

  ngOnInit(): void {
    this.todoLists = this.todolistService.todoLists;
  }
}
