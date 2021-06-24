import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreneauFormComponent } from './Creneau-form.component';

describe('CreneauFormComponent', () => {
  let component: CreneauFormComponent;
  let fixture: ComponentFixture<CreneauFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreneauFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreneauFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
