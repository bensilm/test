import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableHeaderComponent} from './tableHeader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TableHeaderComponent],
  exports: [TableHeaderComponent]
})
export class TableHeaderModule {
}
