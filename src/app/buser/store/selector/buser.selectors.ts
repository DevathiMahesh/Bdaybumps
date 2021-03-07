import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCustomer from '../reducer/buser.reducer';

export const selectBuserState = createFeatureSelector<fromCustomer.BuserState>(
    fromCustomer.buserFeatureKey,
);

export const selectBusers = createSelector(
  selectBuserState,
  (state: fromCustomer.BuserState) => state.hasOwnProperty("busers")? state.busers:[]
);