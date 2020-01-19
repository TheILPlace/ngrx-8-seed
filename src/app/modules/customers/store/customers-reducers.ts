import {
  ActionReducerMap, createFeatureSelector, createSelector, Action, combineReducers,

} from '@ngrx/store';
// import * as fromDataSelectors from './data/data.selectors';
import * as fromData from './data/data.reducer';

export interface State {

  [fromData.dataFeatureKey]: fromData.State;
}

// export const reducers: ActionReducerMap<State> = {

//   [fromData.dataFeatureKey]: fromData.reducer,
// };

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: State | undefined, action: Action) {
  return combineReducers({
    [fromData.dataFeatureKey]: fromData.reducer,
  })(state, action);
}





// export const INITIAL_CUSTOMERS_STATE: State = {

//   [fromData.dataFeatureKey]: fromData.initialState
// };


export function INITIAL_CUSTOMERS_STATE() {
  return {
    [fromData.dataFeatureKey]: fromData.initialState
  };
}
// Selectors


// export const getCustomersFeatureState = createFeatureSelector<State>('customers');

// // get the 'data' part of the customer's state
// export const getCustomersDataState = createSelector(getCustomersFeatureState,  state => state[fromData.dataFeatureKey]);
// // expose the inner selectors from the 'data' reducer
// export const getCustomersList = createSelector(getCustomersDataState, fromDataSelectors.getCustomers);
// export const getIsCustomersLoaded = createSelector(getCustomersDataState, fromDataSelectors.getIsLoaded);
// export const getSelectedCustomer = createSelector(getCustomersDataState, fromDataSelectors.getSelectedCustomer);
