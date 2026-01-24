import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter] increment');
export const decrement = createAction('[Counter] decrement');
export const reset = createAction('[Counter] reset');

export const loadInitialCount = createAction('[Counter] load initial count');
export const loadInitialCountSuccess = createAction('[Counter] load initial count success', props<{value:number}>());
export const loadInitialCountError = createAction('[Counter] load initial count error', props<{error:string}>());