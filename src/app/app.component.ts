import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";
import { Store } from '@ngrx/store';
import { CounterState } from './counter/state/counter.reducer';
import { AsyncPipe } from '@angular/common';
import * as CounterSelector from './counter/state/counter.selector';


@Component({
  selector: 'app-root',
  imports: [CounterComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-19-NgRx-Counter-App';
  private readonly store = inject(Store<CounterState>);

  protected readonly count$ = this.store.select(CounterSelector.selectCount);
}
