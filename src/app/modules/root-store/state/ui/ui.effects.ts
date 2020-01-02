import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as fromUi from './ui.reducer';
import * as UiActions from './ui.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class UiEffects {

    constructor(private actions$: Actions) {
    }

    loadUserName$ = createEffect(
        () => this.actions$.pipe(
          ofType(UiActions.LoadUserName),
          map(() => UiActions.LoadUserNameSuccess({userName: 'achi'}))
        )
      );

}
