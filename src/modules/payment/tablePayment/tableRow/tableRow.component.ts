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
  @Input() public payment: IPayment;

  @Output() public onClickCheckbox: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public onDelete: EventEmitter<number> = new EventEmitter<number>();

  public checkboxes: FormArray;

  private destroy$: Subject<void> = new Subject<void>();

  public ngOnInit() {
    this.createForm();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public createForm() {
    this.checkboxes = new FormArray(Array.from(Array(12)).map(() => new FormControl(false)));
  }

  public clickCheckbox(preventValue: boolean) {
    this.onClickCheckbox.emit(!preventValue);
  }

  public deleteRow() {
    const numberSelected = this.checkboxes.value.filter(selected => selected).length;

    this.onDelete.emit(numberSelected);
  }
}
