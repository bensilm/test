import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {TablePaymentComponent} from './tablePayment.component';
import {TableRowComponent} from './tableRow/tableRow.component';
import {PaymentService} from '../payment.service';

describe('TablePaymentComponent', () => {
  let fixture: ComponentFixture<TablePaymentComponent>;
  let component: TablePaymentComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule
      ],
      declarations: [
        TablePaymentComponent,
        TableRowComponent
      ],
      providers: [PaymentService]
    }).compileComponents();


    fixture = TestBed.createComponent(TablePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should createPayment the app', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('Метод clickToCheckbox', () => {
    it('Чекбокс был нажат', () => {
      spyOn(component.changeFundsSpent, 'emit');
      (component as any).fundsSpent = 100;

      component.clickToCheckbox(true, 5000);

      expect(component.changeFundsSpent.emit).toHaveBeenCalled();
      expect(component.changeFundsSpent.emit).toHaveBeenCalledWith(5100);
    });

    it('Чекбокс был снят', () => {
      spyOn(component.changeFundsSpent, 'emit');
      (component as any).fundsSpent = 1000;

      component.clickToCheckbox(false, 200);

      expect(component.changeFundsSpent.emit).toHaveBeenCalled();
      expect(component.changeFundsSpent.emit).toHaveBeenCalledWith(800);
    });
  });

  describe('Метод deletePayment', () => {
    it('Удаляем платеж', () => {
      spyOn(component.changeFundsSpent, 'emit');
      const testPayment = {name: 'test2', price: 1000};
      (component as any).fundsSpent = 10000;
      (component as any).payments = [{name: 'test1', price: 800}, testPayment, {name: 'test3', price: 2000}];

      component.deletePayment(8, testPayment);

      expect(component.changeFundsSpent.emit).toHaveBeenCalled();
      expect(component.changeFundsSpent.emit).toHaveBeenCalledWith(2000);
    });
  });
});
