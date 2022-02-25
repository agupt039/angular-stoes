import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store/public_api';
import { reducer } from './stores/action-reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('reducer', reducer)],
  declarations: [],
})
export class PassengerDashboardModule {}
