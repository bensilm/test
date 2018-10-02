import {async, inject, TestBed} from '@angular/core/testing';
import {PaymentService} from './payment.service';

describe('PaymentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentService],
    });
  });

  it('should be created', inject([PaymentService], (service: PaymentService) => {
    expect(service).toBeTruthy();
  }));

  it('next', async(inject([PaymentService], (service: PaymentService) => {
    const testPayment = {name: 'test', price: 100};

    service.onAddPayment()
      .subscribe(payment => {
        expect(payment).toBe(testPayment);
      });
    service.next(testPayment);
  })));
});
