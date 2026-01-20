import { createReducer, on } from "@ngrx/store";
import * as CounterActions from './counter.actions';
import { count } from "rxjs";

export interface CounterState 
{
    count : number,
    isLoading : boolean,
    error : string | null
}

export const initialState : CounterState = 
{
    count : 0,
    isLoading : false,
    error : null
}

export const counterReducer = createReducer(
    initialState,
    on(CounterActions.increment, (state)=>{        
        return {
            ...state,
            count: state.count + 1
        }
    }),
    on(CounterActions.decrement, (state)=>{
        return {
            ...state,
            count: state.count - 1
        }
    }),
    on(CounterActions.reset, (state)=>{
        return {
            ...state,
            count : 0
        }
    })
)