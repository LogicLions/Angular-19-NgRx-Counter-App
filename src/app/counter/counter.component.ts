import { Component, inject } from '@angular/core';
import { CounterState } from './state/counter.reducer';
import { Store } from '@ngrx/store';
// import { decrement, increment, reset } from './state/counter.actions';
import * as CounterActions from './state/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {

private readonly store = inject(Store<CounterState>);

handleIncrement()
{
    this.store.dispatch(CounterActions.increment());
}

handleDecrement()
{
  this.store.dispatch(CounterActions.decrement());
}

handleReset()
{
  this.store.dispatch(CounterActions.reset());
}

handleLoadValue()
{

}
}
