import {Component, Inject, OnInit, Optional, Self} from '@angular/core';
import {AbstractControl, NgControl} from '@angular/forms';

const REQUIRED_FIELD_NAME: string = 'required';
const REQUIRED_ERROR_TEXT: string = 'Необходимо заполнить поле';
const DEFAULT_ERROR_TEXT: string = 'Поле заполнено неверно';

@Component({
  selector: 'field-error',
  templateUrl: './fieldError.template.html',
  styleUrls: ['./fieldError.style.less']
})
export class FieldErrorComponent implements OnInit {
  public errorText: string | null = null;

  constructor(@Optional()
              @Self()
              @Inject(NgControl)
              private ngControl: NgControl | null) {
    if (this.ngControl !== null) {
      this.ngControl.valueAccessor = this;
    }
  }

  public ngOnInit() {
    if (this.control) {
      this.updateErrorText();

      this.control.statusChanges.subscribe(() => {
        this.updateErrorText();
      });
    }
  }

  public get invalid(): boolean {
    return this.ngControl && this.ngControl.invalid ? this.ngControl.invalid : false;
  }

  public get touched(): boolean {
    return this.ngControl && this.ngControl.touched ? this.ngControl.touched : false;
  }

  public get control(): AbstractControl | null {
    return this.ngControl && this.ngControl.control || null;
  }

  public registerOnChange() {
  }

  public registerOnTouched() {
  }

  public setDisabledState() {
  }

  public writeValue() {
  }

  private updateErrorText() {
    const firstErrorId = this.firstErrorId;

    if (firstErrorId === REQUIRED_FIELD_NAME) {
      this.errorText =  REQUIRED_ERROR_TEXT;

      return;
    }

    const firstError = firstErrorId && this.controlErrors[firstErrorId];

    this.errorText = !firstError ? '' : firstError || DEFAULT_ERROR_TEXT;
  }

  private get firstErrorId(): string | null {
    const errorIds = Object.keys(this.controlErrors);

    return errorIds[0];
  }

  private get controlErrors(): { [key: string]: any } {
    return (this.control && this.control.errors) || {};
  }
}
