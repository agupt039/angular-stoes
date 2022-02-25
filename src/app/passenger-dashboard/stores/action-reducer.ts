import { ParseSourceFile } from '@angular/compiler/src/parse_util';
import { createAction } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store/public_api';
import { union } from '@ngrx/store/src/action_creator';
import {
  createFeatureSelector,
  createSelector,
} from '@ngrx/store/src/selector';
import { PassengerState, State } from '../models/passenger.interface';

const loading = createAction('[Passengers] Loading');
const loaded = createAction('[Passengers] Loaded');
const data = createAction('[Passengers] data', (data) => ({
  payload: { data },
}));

const passengerAction = union({
  loading,
  loaded,
  data,
});

export type PassengerActionInterface = typeof passengerAction;

const initialState: PassengerState = {
  loading: false,
  loaded: false,
  data: [],
};

function passengerReducer(
  state = initialState,
  action: PassengerActionInterface
) {
  switch (action.type) {
    case loading.type: {
      return { ...state, loading: true };
    }

    case loaded.type: {
      return { ...state, loading: false, loaded: true };
    }

    case data.type: {
      let data = { ...state.data, ...action.payload.data };
      return { ...state, data };
    }
  }
}

export const reducer: ActionReducerMap<State, PassengerActionInterface> = {
  Passengers: passengerReducer,
};

const getPassengers = createFeatureSelector('reducer');
const getPassengerData = createSelector(
  getPassengers,
  (passengers: PassengerState) => passengers.data
);
const getLoading = createSelector(
  getPassengers,
  (passengers: PassengerState) => passengers.loading
);
const getLoaded = createSelector(
  getPassengers,
  (passengers: PassengerState) => passengers.loaded
);
