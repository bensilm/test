import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'payment',
  templateUrl: './payment.template.html',
  styleUrls: ['./payment.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent {
  public fundsSpent: number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  public setFundsSpent(value: number) {
    this.fundsSpent = value;
    this.changeDetectorRef.markForCheck();
  }
}
