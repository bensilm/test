import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'payment',
  templateUrl: './payment.template.html',
  styleUrls: ['./payment.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent {
  fundsSpent = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  setFundsSpent(value: number) {
    this.fundsSpent = value;
    this.changeDetectorRef.markForCheck();
  }
}
