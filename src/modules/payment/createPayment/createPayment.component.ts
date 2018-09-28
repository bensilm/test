import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {positiveNumberValidator} from '../../../common/validators/positiveNumber.validator';
import {PaymentService} from '../payment.service';

@Component({
  selector: 'create-payment',
  templateUrl: './createPayment.template.html',
  styleUrls: ['./createPayment.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePaymentComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private paymentService: PaymentService) {
  }

  public ngOnInit() {
    this.createForm();
  }

  public createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [positiveNumberValidator, Validators.required]],
    });
  }

  public submit() {
    this.paymentService.next(this.form.value);

    this.form.reset();
  }
}
