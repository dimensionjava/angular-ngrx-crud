// modules/personas/store/index.ts
import { ActionReducerMap } from '@ngrx/store';
import { personasReducer, PersonasState } from './personas.reducer';

export interface AppState {
  personas: PersonasState;
}

export const reducers: ActionReducerMap<AppState> = {
  personas: personasReducer
};

export * from './personas.actions';
export * from './personas.selector';
