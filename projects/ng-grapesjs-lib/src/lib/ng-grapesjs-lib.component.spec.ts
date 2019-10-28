import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGrapesjsLibComponent } from './ng-grapesjs-lib.component';

describe('NgGrapesjsLibComponent', () => {
  let component: NgGrapesjsLibComponent;
  let fixture: ComponentFixture<NgGrapesjsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGrapesjsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGrapesjsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
