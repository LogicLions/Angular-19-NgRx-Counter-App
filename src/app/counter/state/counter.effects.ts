import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CounterActions from './counter.actions';
import { catchError, delay, map, of, switchMap, throwError } from "rxjs";

@Injectable()

export class CounterEffects{
    private readonly actions$ = inject(Actions);

    // loadInitialCount$ = createEffect(()=>
    //     this.actions$.pipe(
    //         ofType(CounterActions.loadInitialCount)
    //         ,delay(3000)
    //         ,map(()=>{
    //             return CounterActions.loadInitialCountSuccess({value: 12})
    //             }                
    //         )
    //     )
    // )

    loadInitialCount$ = createEffect(()=>
        this.actions$.pipe(
            ofType(CounterActions.loadInitialCount)
            ,switchMap(()=>
                of(Math.floor(Math.random() * 100)).pipe(
                    delay(2000)
                    ,switchMap((data)=>{
                        if(data < 50) {
                            return throwError(() => new Error('Something went wrong!!'));
                        }
                        else {
                            return of(CounterActions.loadInitialCountSuccess({value: data}));
                        }
                    }),
                    catchError((err)=>
                        of(
                            CounterActions.loadInitialCountError({error:err})
                        )
                    )
                )
            )
        )
    )
}