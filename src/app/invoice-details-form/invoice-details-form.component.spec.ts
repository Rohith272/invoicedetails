import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailsFormComponent } from './invoice-details-form.component';

describe('InvoiceDetailsFormComponent', () => {
  let component: InvoiceDetailsFormComponent;
  let fixture: ComponentFixture<InvoiceDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
