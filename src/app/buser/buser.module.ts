import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';

import {buserFeatureKey, reducer} from './store/reducer/buser.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(buserFeatureKey, reducer),
  ]
})
export class BuserModule { }
