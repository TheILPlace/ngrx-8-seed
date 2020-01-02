import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS, metaReducers } from './state/root-store.reducers';
import { RootStoreFacadeService } from './state/root-store.facade.service';
import { UiEffects } from './state/ui/ui.effects';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    /**
     * StoreModule.forRoot is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
      },
    }),

    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),

    /**
     * Store devtools instrument the store retaining past versions of state
     * and recalculating new states. This enables powerful time-travel
     * debugging.
     *
     * To use the debugger, install the Redux Devtools extension for either
     * Chrome or Firefox
     *
     * See: https://github.com/zalmoxisus/redux-devtools-extension
     */
    !environment.production ? StoreDevtoolsModule.instrument({
      name: 'NgRx8-seed',
      maxAge: 10

      // In a production build you would want to disable the Store Devtools
      // logOnly: environment.production,
    }) : [],

    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://ngrx.io/guide/effects#registering-root-effects
     */
    EffectsModule.forRoot([UiEffects]),
  ],
  providers: [RootStoreFacadeService]
})
export class RootStoreModule { }
