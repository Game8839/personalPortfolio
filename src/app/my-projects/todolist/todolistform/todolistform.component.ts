import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todolist.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'todolistform',
  templateUrl: './todolistform.component.html',
  styleUrls: ['./todolistform.component.css'],
})
export class TodolistformComponent implements OnInit {
  ngOnInit(): void {
    this.takenHeaders = this.todolistService.todoLists.map((i) => i.header);
    this.todolistForm = new FormGroup({
      header: new FormControl(null, [
        Validators.required,
        this.forbiddenHeaders.bind(this),
      ]),
      task: new FormControl(null, Validators.required),
      createdBy: new FormControl(null, Validators.required),
      deathLine: new FormControl(null, Validators.required),
    });
  }
  constructor(private todolistService: TodoListService) {}
  model: NgbDateStruct;
  faCalendar = faCalendar;
  todolistForm: FormGroup;
  takenHeaders: string[];

  onSubmit() {
    const deathLine = new Date(
      `${this.todolistForm.value.deathLine.year}-${this.todolistForm.value.deathLine.month}-${this.todolistForm.value.deathLine.day}`
    );
    this.todolistService.addTask({
      ...this.todolistForm.value,
      id: uuidv4(),
      createdAt: new Date(),
      status: 'active',
      deathLine,
    });
    this.todolistForm.reset();
  }

  forbiddenHeaders(control: FormControl): { [s: string]: boolean } {
    if (this.takenHeaders.indexOf(control.value) != -1) {
      return { headerIsTaken: true };
    }
    return null;
  }

  reset() {
    this.todolistForm.reset();
  }
}
