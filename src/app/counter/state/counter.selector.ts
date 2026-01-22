import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.reducer";

export const selectCounterFeature = createFeatureSelector<CounterState>('counter');
export const selectCount = createSelector(selectCounterFeature, (state)=> state.count);
export const selectIsLoading = createSelector(selectCounterFeature, (state)=> state.isLoading);
export const selectError = createSelector(selectCounterFeature, (state)=> state.error);

export const selectProfileInfo = createSelector(selectCounterFeature, (state) => state.profileInfo);
export const selectName = createSelector(selectProfileInfo, (state)=> state.name);
export const selectAge = createSelector(selectProfileInfo, (state)=> state.age);