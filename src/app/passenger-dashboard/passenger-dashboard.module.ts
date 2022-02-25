import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store/public_api';
import { reducer } from './stores/action-reducer';
import { HttpClientModule } from '@angular/common/http';
import { PassengerService } from './pasenger.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('reducer', reducer),
    HttpClientModule,
  ],
  declarations: [],
  providers: [PassengerService],
})
export class PassengerDashboardModule {}
