import {NgModule} from '@angular/core';
import {PaymentComponent} from './payment.component';
import {CreatePaymentModule} from './createPayment/createPayment.module';
import {TablePaymentModule} from './tablePayment/tablePayment.module';
import {PaymentService} from './payment.service';

@NgModule({
  imports: [CreatePaymentModule, TablePaymentModule],
  declarations: [PaymentComponent],
  exports: [PaymentComponent],
  providers: [PaymentService]
})
export class PaymentModule {
}
