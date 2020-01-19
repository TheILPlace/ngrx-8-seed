import { on, createReducer } from '@ngrx/store';
import * as fromDataActions from './data.actions';
import { Customer } from '../../models/customer';
import { cloneDeep } from 'lodash';
import { produceOn } from '../../../../functions/store/produceOn';

export const dataFeatureKey = 'data';

export interface State {
  customers: Array<Customer>;
  loaded: boolean;
  selectedCustomerId: number;
}

export const initialState: State = {
  customers: [],
  loaded: false,
  selectedCustomerId: null

};


export const reducer = createReducer(
  initialState,

  // on(fromDataActions.LoadSuccess, (state: State, { customers }) => {
  //   return { ...state, customers, loaded: true, selectedCustomerId: null };
  // }
  // ),


  produceOn(fromDataActions.LoadSuccess, (draft, action) => {
    draft.customers = action.customers;
    draft.loaded = true;
    draft.selectedCustomerId = null;
  }
  ),


  // on(fromDataActions.Select, (state: State, { customerId }) => {
  //   return { ...state, selectedCustomerId: customerId };
  // }
  // ),

  produceOn(fromDataActions.Select, (draft, action) => {
    draft.selectedCustomerId = action.customerId;
  }
  ),

  // on(fromDataActions.AddSuccess, (state: State, { customer }) => {

  //   return { ...state, customers: [...state.customers, cloneDeep(customer)] };
  // }
  // )

  produceOn(fromDataActions.AddSuccess, (draft, action) => {
    draft.customers.push(cloneDeep(action.customer));
  }
  )
);

