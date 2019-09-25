import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloresPage } from './flores.page';

describe('FloresPage', () => {
  let component: FloresPage;
  let fixture: ComponentFixture<FloresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
