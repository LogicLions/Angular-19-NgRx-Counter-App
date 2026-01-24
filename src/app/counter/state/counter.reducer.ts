import { createReducer, on } from "@ngrx/store";
import * as CounterActions from './counter.actions';

export interface CounterState 
{
    count : number,
    isLoading : boolean,
    error : string | null,
    profileInfo: {
        name : string,
        age: number
    }
}

export const initialState : CounterState = 
{
    count : 0,
    isLoading : false,
    error : null,
    profileInfo: {
        name: 'Sachin',
        age: 33
    }
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
    }),
    on(CounterActions.loadInitialCount, (state)=>{
        return {
            ...state,
            isLoading : true            
        }
    }),
    on(CounterActions.loadInitialCountSuccess, (state,{value})=>{
        return {
            ...state,
            count: value,
            isLoading: false
        }
    }),
    on(CounterActions.loadInitialCountError, (state, {error})=>{
        return {
            ...state,
            error
        }
    })
)