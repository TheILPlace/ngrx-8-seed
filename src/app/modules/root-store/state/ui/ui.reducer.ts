import { createReducer, on } from '@ngrx/store';
import * as fromUiActions from './ui.actions';
import { produceOn } from '../../../../functions/store/produceOn';

export const uiFeatureKey = 'ui';

export interface State {
  userName: string;
}

export const initialState: State = {
  userName: ''

};


export const reducer = createReducer(
  initialState,

  produceOn(fromUiActions.LoadUserName, (draft, action) => {
    draft.userName = '';
  }),


  produceOn(fromUiActions.LoadUserNameSuccess, (draft, action) => {
    draft.userName = action.userName;
  }
  ), // userName: userName

//   on(fromUiActions.LoadUserNameSuccess, (state, { userName }) => {
//     return { ...state, userName };
//   }
//   ) // userName: userName
// ,
//   on(fromUiActions.LoadUserNameSuccess, (state, action) => {
//     return { ...state, userName: action.userName };
//   }
//   ) // userName: userName


);


