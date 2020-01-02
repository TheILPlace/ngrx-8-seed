import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromRootStore from './root-store.reducers';
import * as RootStoreSelectors from './root-store.selectors';

import * as fromUiActions from './ui/ui.actions';

@Injectable()
export class RootStoreFacadeService {
  constructor(private store: Store<fromRootStore.State>) { }

  get userName$() {
    return  this.store.pipe(select(RootStoreSelectors.getUserName));
  }


loadUserName() {
  this.store.dispatch(fromUiActions.LoadUserName());
}
}
