import { State } from './data.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Customer } from '../../models/customer';
import * as fromCustomersStore from '../customers-reducers';
import * as fromData from './data.reducer';

 // // selectors
export const getCustomersFeatureState = createFeatureSelector<fromCustomersStore.State>('customers');

    // get the 'data' part of the customer's state
export const getCustomersDataState = createSelector(getCustomersFeatureState, state => state[fromData.dataFeatureKey]);
    // expose the inner selectors from the 'data' reducer
export const getCustomersList = createSelector(getCustomersDataState, (state: fromData.State) => state.customers);
export const getIsCustomersLoaded = createSelector(getCustomersDataState, (state: fromData.State) => state.loaded);
export const getSelectedCustomerId = createSelector(getCustomersDataState, (state: fromData.State) => state.selectedCustomerId);


export const getSelectedCustomer = createSelector(getCustomersList, getSelectedCustomerId,
    (customers: Customer[], selectedCustomerId: number) => {
        return customers.filter((customer: Customer) => customer.id === selectedCustomerId)[0];
    });
