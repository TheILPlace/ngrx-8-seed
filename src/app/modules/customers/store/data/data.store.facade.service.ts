import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector} from '@ngrx/store';
import { Customer } from '../../models/customer';

import * as fromData from './data.reducer';
import * as fromDataActions from './data.actions';
import * as fromCustomersStore from '../customers-reducers';
import * as fromDataSelectors from './data.selectors';

@Injectable()
export class DataStoreFacadeService {


    constructor(private store: Store<fromData.State>) {}

    // // selectors
    // private getCustomersFeatureState = createFeatureSelector<fromCustomersStore.State>('customers');

    // // get the 'data' part of the customer's state
    // private getCustomersDataState = createSelector(this.getCustomersFeatureState,  state => state[fromData.dataFeatureKey]);
    // // expose the inner selectors from the 'data' reducer
    // private getCustomersList = createSelector(this.getCustomersDataState,  (state: fromData.State) => state.customers);
    // private getIsCustomersLoaded = createSelector(this.getCustomersDataState,  (state: fromData.State) => state.loaded);
    // private getSelectedCustomerId = createSelector(this.getCustomersDataState, (state: fromData.State) => state.selectedCustomerId);


    // private getSelectedCustomer = createSelector(this.getCustomersList, this.getSelectedCustomerId,
    //     (customers: Customer[], selectedCustomerId: number) => {
    //     return customers.filter((customer: Customer) => customer.id === selectedCustomerId)[0];
    // });



    // public properties
    customersList$ = this.store.select(fromDataSelectors.getCustomersList);
    isCustomersLoaded$ = this.store.select(fromDataSelectors.getIsCustomersLoaded);
    selectedCustomer$ = this.store.select(fromDataSelectors.getSelectedCustomer);


    // dispachers

    loadCustomersAction() {
        this.store.dispatch(fromDataActions.Load());
    }

    selectCustomerAction(id: number) {
        this.store.dispatch(fromDataActions.Select({customerId: id}));
    }

    addCustomerAction(customer: Customer) {
        this.store.dispatch(fromDataActions.Add({customer}));
    }



}

