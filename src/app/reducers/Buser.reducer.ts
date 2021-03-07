import { Buser } from '../models/buser';
import { Action } from '@ngrx/store';
export const ADD_BUSER = 'ADD_BUSER';

export function addBuserReducer(state: Buser[] = [], action) {
  switch (action.type) {
    case ADD_BUSER:
        console.log("event dispatched")
        return [...state, action.payload];
    default:
        return state;
    }
}