import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';
import {TableRowComponent} from './tableRow.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [TableRowComponent],
  exports: [TableRowComponent]
})
export class TableRowModule {
}
