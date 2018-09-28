import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {TablePaymentComponent} from './tablePayment.component';
import {CommonModule} from '@angular/common';
import {TableRowComponent} from './tableRow/tableRow.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TablePaymentComponent,
    TableRowComponent
  ],
  exports: [TablePaymentComponent]
})
export class TablePaymentModule {
}
