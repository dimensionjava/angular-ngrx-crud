import { createReducer, on } from '@ngrx/store';
import { Persona } from '../models/persona.model';
import { personaActions } from './personas.actions';

export interface PersonasState {
  personas: Persona[];
}

export const initialState: PersonasState = {
  personas: []
};

export const personasReducer = createReducer(
  initialState,
  on(personaActions.addPersona, (state, { persona }) => ({
    ...state,
    personas: [
      ...state.personas,
      { ...persona, id: generateId() } // Función para generar ID único
    ]
  })),
  on(personaActions.updatePersona, (state, { id, changes }) => ({
    ...state,
    personas: state.personas.map(persona =>
      persona.id === id ? { ...persona, ...changes } : persona
    )
  })),
  on(personaActions.deletePersona, (state, { id }) => ({
    ...state,
    personas: state.personas.filter(persona => persona.id !== id)
  }))
);

function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}
