import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {PaymentModule} from '../payment/payment.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaymentModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should createPayment the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
