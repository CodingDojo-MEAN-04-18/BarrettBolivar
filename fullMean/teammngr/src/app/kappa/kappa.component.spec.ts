import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KappaComponent } from './kappa.component';

describe('KappaComponent', () => {
  let component: KappaComponent;
  let fixture: ComponentFixture<KappaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KappaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KappaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
