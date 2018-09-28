import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormArray, FormControl} from '@angular/forms';
import {IPayment} from '../../model/IPayment';
import {Subject} from 'rxjs';

@Component({
  selector: 'table-row',
  templateUrl: './tableRow.template.html',
  styleUrls: ['./tableRow.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableRowComponent implements OnInit, OnDestroy {
  @Input() payment: IPayment;

  @Output() onClickCheckbox = new EventEmitter<boolean>();
  @Output() onDelete = new EventEmitter<number>();

  checkboxs: FormArray;

  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  createForm() {
    this.checkboxs = new FormArray(Array.from(Array(12)).map(() => new FormControl(false)));
  }

  clickCheckbox(preventValue: boolean) {
    this.onClickCheckbox.emit(!preventValue);
  }

  deleteRow() {
    const numberSelected = this.checkboxs.value.filter(selected => selected).length;

    this.onDelete.emit(numberSelected);
  }
}
