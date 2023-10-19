import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistformComponent } from './todolistform.component';

describe('TodolistformComponent', () => {
  let component: TodolistformComponent;
  let fixture: ComponentFixture<TodolistformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
