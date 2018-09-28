import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {TablePaymentComponent} from './tablePayment.component';
import {CommonModule} from '@angular/common';
import {TableRowModule} from './tableRow/tableRow.module';
import {TableHeaderModule} from './tableHeader/tableHeader.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableHeaderModule,
    TableRowModule
  ],
  declarations: [TablePaymentComponent],
  exports: [TablePaymentComponent]
})
export class TablePaymentModule {
}
