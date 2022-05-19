/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CallsqlComponent } from './callsql.component';

describe('CallsqlComponent', () => {
  let component: CallsqlComponent;
  let fixture: ComponentFixture<CallsqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
