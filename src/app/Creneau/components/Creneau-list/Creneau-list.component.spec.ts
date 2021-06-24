import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreneauListComponent } from './Creneau-list.component';

describe('CreneauListComponent', () => {
  let component: CreneauListComponent;
  let fixture: ComponentFixture<CreneauListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreneauListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreneauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
