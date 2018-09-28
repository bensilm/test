import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IPayment} from './model/IPayment';

@Injectable()
export class PaymentService {
  private addPayment$: Subject<IPayment> = new Subject<IPayment>();

  public onAddPayment(): Observable<IPayment> {
    return this.addPayment$.asObservable();
  }

  public next(payment: IPayment) {
    this.addPayment$.next(payment);
  }
}
