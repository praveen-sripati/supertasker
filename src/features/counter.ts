import { createAction, createReducer } from '@reduxjs/toolkit';

// State definitions
type CounterState = { count: number };

// Counter Initial State
const initialState: CounterState = {
  count: 0
}

// Action Creators
const increment = createAction('INCREMENT', (amount: number) => {
  return {
    payload: amount,
  };
});

const decrement = createAction('DECREMENT', (amount: number) => {
  return {
    payload: amount,
  };
});

const reset = createAction('RESET');

// Action types definitions
type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof reset>;

// Reducer for count state
export const countReducer = createReducer(initialState, builder => {
  builder.addCase(increment, (state, action) => {
    state.count += action.payload;
  })
  builder.addCase(decrement, (state, action) => {
    state.count -= action.payload;
  })
  builder.addCase(reset, (state) => {
    state.count = 0
  })
})

// Vanilla Redux Reducer for count state
export const reducer = (state: CounterState, action: CounterAction) => {
  if (action.type === increment.type) {
    return { count: state.count + action.payload };
  }

  if (action.type === decrement.type) {
    return { count: state.count - action.payload };
  }

  if (action.type === reset.type) {
    return { count: 0 };
  }

  return state;
};
