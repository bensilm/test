import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FieldErrorComponent} from './fieldError.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [FieldErrorComponent],
  exports: [FieldErrorComponent],
})
export class FieldErrorModule {}
