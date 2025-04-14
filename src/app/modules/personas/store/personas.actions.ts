import { createAction, props } from '@ngrx/store';
import { Persona } from '../models/persona.model';

export const loadPersonas = createAction('[Personas] Load Personas');

export const addPersona = createAction(
  '[Personas] Add Persona',
  props<{ persona: Omit<Persona, 'id'> }>()
);

export const updatePersona = createAction(
  '[Personas] Update Persona',
  props<{ id: string; changes: Partial<Omit<Persona, 'id'>> }>()
);

export const deletePersona = createAction(
  '[Personas] Delete Persona',
  props<{ id: string }>()
);

export const personaActions = {
  loadPersonas,
  addPersona,
  updatePersona,
  deletePersona
};
