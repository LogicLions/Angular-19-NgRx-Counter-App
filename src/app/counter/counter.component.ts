import { Component, inject } from '@angular/core';
import { CounterState } from './state/counter.reducer';
import { Store } from '@ngrx/store';
// import { decrement, increment, reset } from './state/counter.actions';
import * as CounterActions from './state/counter.actions';
import { AsyncPipe } from '@angular/common';
import * as CounterSelector from './state/counter.selector';

@Component({
  selector: 'app-counter',
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {

private readonly store = inject(Store<CounterState>);

protected readonly count$ = this.store.select(CounterSelector.selectCount);
protected readonly isLoading$ = this.store.select(CounterSelector.selectIsLoading);
protected readonly error$ = this.store.select(CounterSelector.selectError);
protected readonly name$ = this.store.select(CounterSelector.selectName);
protected readonly age$ = this.store.select(CounterSelector.selectAge);

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
