import { Injectable } from '@angular/core';
export type TTask = {
  id: number;
  header: string;
  task: string;
  createdBy: string;
  status: string;
  createdAt: Date;
  deathLine: Date;
};
@Injectable({ providedIn: 'root' })
export class TodoListService {
  todoLists: TTask[] = [
    {
      id: 1,
      header: 'test header',
      task: 'test',
      createdBy: 'game',
      status: 'active',
      createdAt: new Date(),
      deathLine: new Date(),
    },
    {
      id: 2,
      header: 'test header1',
      task: 'test',
      createdBy: 'game',
      status: 'active',
      createdAt: new Date(),
      deathLine: new Date(),
    },
    {
      id: 3,
      header: 'test header2',
      task: 'test',
      createdBy: 'game',
      status: 'active',
      createdAt: new Date(),
      deathLine: new Date(),
    },
  ];
  constructor() {}

  addTask(task: TTask) {
    this.todoLists.push(task);
  }

  editTask(id: number, task: TTask) {
    this.todoLists[id] = task;
  }
}
