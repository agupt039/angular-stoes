import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store/public_api';
import { reducer } from './stores/action-reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('reducer', reducer),
    HttpClientModule,
  ],
  declarations: [],
})
export class PassengerDashboardModule {}
