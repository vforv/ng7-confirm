import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7ConfirmComponent } from './ng7-confirm.component';

describe('Ng7ConfirmComponent', () => {
  let component: Ng7ConfirmComponent;
  let fixture: ComponentFixture<Ng7ConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7ConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7ConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
