import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KundenprofilComponent } from './kundenprofil.component';

describe('KundenprofilComponent', () => {
  let component: KundenprofilComponent;
  let fixture: ComponentFixture<KundenprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundenprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KundenprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
