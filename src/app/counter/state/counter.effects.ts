import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CounterActions from './counter.actions';
import { delay, map } from "rxjs";

@Injectable()

export class CounterEffects{
    private readonly actions$ = inject(Actions);

    loadInitialCount$ = createEffect(()=>
        this.actions$.pipe(
            ofType(CounterActions.loadInitialCount)
            ,delay(3000)
            ,map(()=>{
                return CounterActions.loadInitialCountSuccess({value: 12})
                }                
            )
        )
    )
}