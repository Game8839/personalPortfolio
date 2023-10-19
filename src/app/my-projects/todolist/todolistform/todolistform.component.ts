import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todolist.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'todolistform',
  templateUrl: './todolistform.component.html',
  styleUrls: ['./todolistform.component.css'],
})
export class TodolistformComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private todolistService: TodoListService) {}
  selectedDate;
  todolistForm: FormGroup;
}
