import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';

import {CreatePaymentComponent} from './createPayment.component';
import {FieldErrorModule} from '../../components/fieldError/fieldError.module';
import {PaymentService} from '../payment.service';

describe('CreatePaymentComponent', () => {
  let component: CreatePaymentComponent;
  let fixture: ComponentFixture<CreatePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePaymentComponent],
      imports: [ReactiveFormsModule, FieldErrorModule],
      providers: [PaymentService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CreatePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
