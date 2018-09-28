import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IPayment} from './model/IPayment';

@Injectable()
export class PaymentService {
  private addPayment$ = new Subject<IPayment>();

  onAddPayment(): Observable<IPayment> {
    return this.addPayment$.asObservable();
  }

  next(payment: IPayment) {
    this.addPayment$.next(payment);
  }
}
