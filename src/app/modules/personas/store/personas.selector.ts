import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PersonasState } from './personas.reducer';

export const selectPersonasState = createFeatureSelector<PersonasState>('personas');

export const selectAllPersonas = createSelector(
  selectPersonasState,
  (state) => state.personas
);

export const selectPersonaById = (id: string) => createSelector(
  selectAllPersonas,
  (personas) => personas.find(p => p.id === id)
);
