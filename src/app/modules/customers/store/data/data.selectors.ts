// import { State } from './data.reducer';
// import { createSelector } from '@ngrx/store';
// import { Customer } from '../../models/customer';


// // // Selectors !
// export const getCustomers = (state: State) => state.customers;
// export const getIsLoaded = (state: State) => state.loaded;
// export const getSelectedCustomerId = (state: State) => state.selectedCustomerId;
// export const getSelectedCustomer = createSelector(getCustomers, getSelectedCustomerId,
//     (customers: Customer[], selectedCustomerId: number) => {
//     return customers.filter((customer: Customer) => customer.id === selectedCustomerId)[0];
// });
