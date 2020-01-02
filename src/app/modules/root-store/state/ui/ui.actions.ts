import { createAction, props } from '@ngrx/store';

export const LoadUserName = createAction(
  '[Ui] Load User Name'
);


export const LoadUserNameSuccess = createAction(
  '[Ui] Load User Name Success',
  props<{ userName: string }>()
);

