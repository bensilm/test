import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, Optional, Self} from '@angular/core';
import {AbstractControl, NgControl} from '@angular/forms';

export const REQUIRED_FIELD_NAME = 'required';
export const REQUIRED_ERROR_TEXT = 'Необходимо заполнить поле';
export const DEFAULT_ERROR_TEXT = 'Поле заполнено неверно';

@Component({
  selector: 'field-error',
  // https://github.com/angular/angular/issues/10887
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fieldError.template.html',
  styleUrls: ['./fieldError.style.less'],
})
export class FieldErrorComponent implements OnInit {
  errorText: string | null = null;

  constructor(@Optional()
              @Self()
              @Inject(NgControl)
              private ngControl: NgControl | null,
              @Inject(ChangeDetectorRef) private changeDetectorRef: ChangeDetectorRef,) {
    if (this.ngControl !== null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    if (this.control) {
      this.updateErrorText();

      this.control.statusChanges.subscribe(() => {
        this.updateErrorText();
      });
    }
  }

  get invalid(): boolean {
    return this.ngControl === null || this.ngControl.invalid === null ? false : this.ngControl.invalid;
  }

  get touched(): boolean {
    return this.ngControl === null || this.ngControl.touched === null ? false : this.ngControl.touched;
  }

  get control(): AbstractControl | null {
    return this.ngControl === null ? null : this.ngControl.control || null;
  }

  registerOnChange() {
    this.markForCheck();
  }

  registerOnTouched() {
    this.markForCheck();
  }

  setDisabledState() {
    this.markForCheck();
  }

  writeValue() {
    this.markForCheck();
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

  private markForCheck() {
    this.changeDetectorRef.markForCheck();
  }
}
