import { createAction, props } from '@ngrx/store';
import {Buser} from '../../../models/buser';
export const addBusers = createAction(
  '[Buser] Add Busers',
  (buser: Buser) => ({buser})
);




