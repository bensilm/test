import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {PaymentService} from '../payment.service';
import {IPayment} from '../model/IPayment';
import {Subject} from 'rxjs';

const COLUMN_NAMES = ['Наименование платежа', 'Стоимость',
  'Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек', 'Удалить'];

@Component({
  selector: 'table-payment',
  templateUrl: './tablePayment.template.html',
  styleUrls: ['./tablePayment.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablePaymentComponent implements OnInit, OnDestroy {
  @Output() changeFundsSpent = new EventEmitter<number>();

  readonly columnNames = COLUMN_NAMES;

  payments: IPayment[] = [];

  private fundsSpent = 0;
  private destroy$ = new Subject<void>();

  constructor(private paymentService: PaymentService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.handleAddPayment();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleAddPayment() {
    this.paymentService.onAddPayment()
      .subscribe(payment => {
        this.payments.push(payment);
        this.changeDetectorRef.markForCheck();
      });
  }

  clickToCheckbox(selected: boolean, price: number) {
    this.fundsSpent += selected ? price : -price;

    this.changeFundsSpent.emit(this.fundsSpent);
  }

  deletePayment(numberSelected: number, payment: IPayment) {
    const index = this.payments.indexOf(payment);

    if (index !== -1) {
      this.payments.splice(index, 1);
      this.fundsSpent -= numberSelected * payment.price;
      this.changeDetectorRef.markForCheck();

      this.changeFundsSpent.emit(this.fundsSpent);
    }
  }
}
