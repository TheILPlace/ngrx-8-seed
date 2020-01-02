import { Action, createAction, props } from '@ngrx/store';
import { Customer } from '../../models/customer';


export const Load = createAction(
  '[Data] Load Customers'
);

export const LoadSuccess = createAction(
  '[Data] Load Customers Success',
  props<{ customers: Customer[] }>()
);

export const Select = createAction(
  '[Data] Select Customer',
  props<{ customerId: number }>()
);


export const Add = createAction(
  '[Data] Add Customer',
  props<{ customer: Customer }>()
);
export const AddSuccess = createAction(
  '[Data] Add Customer Success',
  props<{ customer: Customer }>()
);



