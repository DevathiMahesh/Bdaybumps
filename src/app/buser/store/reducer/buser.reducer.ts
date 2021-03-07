import { Action, createReducer, on } from '@ngrx/store';
import * as BuserActions from '../action/buser.actions';
import {Buser} from '../../../models/buser';
export const buserFeatureKey = 'buser';

export interface BuserState {
  busers:Buser[]
}

export const initialState: BuserState = {
  busers: [],
};

export const buserReducer = createReducer(
  initialState,
  on(BuserActions.addBusers, (state: BuserState, { buser }) => ({
    ...state,

    busers: [...state.busers, buser],
  }))
);
export function reducer(state: BuserState, action: Action): any {
  return buserReducer(state, action);
}
