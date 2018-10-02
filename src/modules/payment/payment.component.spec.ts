import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreatePaymentModule} from './createPayment/createPayment.module';
import {TablePaymentModule} from './tablePayment/tablePayment.module';
import {PaymentService} from './payment.service';
import {PaymentComponent} from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentComponent],
      imports: [CreatePaymentModule, TablePaymentModule],
      providers: [PaymentService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
