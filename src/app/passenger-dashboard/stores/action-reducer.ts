import { createAction } from '@ngrx/store';
import { union } from '@ngrx/store/src/action_creator';

const loading = createAction('[Passengers] Loading');
const loaded = createAction('[Passengers] Loaded');
const data = createAction('[Passengers] data ');

const passengerAction = union({
  loading,
  loaded,
  data,
});


export type PassengerActionInterface = typeof passengerAction

const initialState = {
  loading: false,
  loaded: false,
  data: []
}

function passengerReducer(state= intitalState,action:PassengerActionInterface){

}