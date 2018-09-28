import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {CreatePaymentComponent} from './createPayment.component';
import {FieldErrorModule} from '../../components/fieldError/fieldError.module';

@NgModule({
  imports: [ReactiveFormsModule, FieldErrorModule],
  declarations: [CreatePaymentComponent],
  exports: [CreatePaymentComponent]
})
export class CreatePaymentModule {
}
