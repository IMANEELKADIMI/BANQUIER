import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousItemComponent } from './RendezVous-item.component';

describe('RendezVousItemComponent', () => {
  let component: RendezVousItemComponent;
  let fixture: ComponentFixture<RendezVousItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezVousItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
