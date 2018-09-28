import {AbstractControl, ValidationErrors} from '@angular/forms';

export function positiveNumberValidator(control: AbstractControl): ValidationErrors | null {
  return control.value < 0
    ? {error: 'Стоимость не может быть меньше 0'}
    : null;
}
