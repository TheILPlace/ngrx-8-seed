import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import * as fromDataActions from './data.actions';
import { Customer } from '../../models/customer';
import { switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpService } from '../../../core/services/http.service';

@Injectable()
export class CustomerDataEffects {

  constructor(private actions$: Actions, httpService: HttpService) { }


  loadCustomers$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromDataActions.Load),
      switchMap(() => {
        const loadedCustomers = new Array<Customer>();

        const customer = new Customer();
        customer.id = 1;
        customer.name = 'John Doe';
        customer.address = 'the moon';

        const customer2 = new Customer();
        customer2.id = 2;
        customer2.name = 'King Solomon';
        customer2.address = 'Rome';

        loadedCustomers.push(customer);
        loadedCustomers.push(customer2);

        return [fromDataActions.LoadSuccess({customers: loadedCustomers})];
      })
    )
  );



  addCustomer$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromDataActions.Add),
      map((action) => fromDataActions.AddSuccess({customer: action.customer}))
    )
  );


}
