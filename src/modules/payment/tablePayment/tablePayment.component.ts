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
  @Output() public changeFundsSpent: EventEmitter<number> = new EventEmitter<number>();

  readonly columnNames: string[] = COLUMN_NAMES;

  public payments: IPayment[] = [];

  private fundsSpent: number = 0;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private paymentService: PaymentService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  public ngOnInit() {
    this.handleAddPayment();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public handleAddPayment() {
    this.paymentService.onAddPayment()
      .subscribe(payment => {
        this.payments.push(payment);
        this.changeDetectorRef.markForCheck();
      });
  }

  public clickToCheckbox(selected: boolean, price: number) {
    this.fundsSpent += selected ? price : -price;

    this.changeFundsSpent.emit(this.fundsSpent);
  }

  public deletePayment(numberSelected: number, payment: IPayment) {
    const index = this.payments.indexOf(payment);

    if (index !== -1) {
      this.payments.splice(index, 1);
      this.fundsSpent -= numberSelected * payment.price;
      this.changeDetectorRef.markForCheck();

      this.changeFundsSpent.emit(this.fundsSpent);
    }
  }
}
