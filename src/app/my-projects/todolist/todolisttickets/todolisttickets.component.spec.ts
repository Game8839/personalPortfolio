import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistticketsComponent } from './todolisttickets.component';

describe('TodolistticketsComponent', () => {
  let component: TodolistticketsComponent;
  let fixture: ComponentFixture<TodolistticketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistticketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodolistticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
