import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {positiveNumberValidator} from '../../../common/validators/positiveNumber.validator';
import {IPayment} from '../model/IPayment';
import {PaymentService} from '../payment.service';

@Component({
  selector: 'create-payment',
  templateUrl: './createPayment.template.html',
  styleUrls: ['./createPayment.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePaymentComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private paymentService: PaymentService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [positiveNumberValidator, Validators.required]],
    });
  }

  submit() {
    this.paymentService.next(this.form.value);

    this.form.reset();
  }
}
