import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRootStore from './root-store.reducers';
import * as fromUi from './ui/ui.reducer';
import * as fromUiSelectors from './ui/ui.selectors';

/**
 * Layout Reducers
 */
export const selectUiState = createFeatureSelector<fromRootStore.State, fromUi.State>(
    'ui'
);

export const getUserName = createSelector(
    selectUiState,
    fromUiSelectors.getUserName
);
