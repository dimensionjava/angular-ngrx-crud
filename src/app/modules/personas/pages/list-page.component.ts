// modules/personas/pages/list-page/list-page.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';
import { personaActions, selectAllPersonas } from '../store';

@Component({
  selector: 'app-list-page',
  standalone: false,
  template: `
    <h2>Lista de Personas</h2>

    <div *ngFor="let persona of personas$ | async">
      {{ persona.name }} - {{ persona.age }} - {{ persona.mail }}
      <button (click)="deletePersona(persona.id)">Eliminar</button>
      <a [routerLink]="['/personas/edit', persona.id]">Editar</a>
    </div>

    <form (ngSubmit)="addPersona()">
      <input [(ngModel)]="newPersona.name" name="name" placeholder="Nombre" required>
      <input [(ngModel)]="newPersona.age" type="number" name="age" placeholder="Edad" required>
      <input [(ngModel)]="newPersona.mail" type="email" name="mail" placeholder="Email" required>
      <button type="submit">Agregar</button>
    </form>
  `
})
export class ListPageComponent {
  personas$: Observable<Persona[]>;
  newPersona: Omit<Persona, 'id'> = { name: '', age: 0, mail: '' };

  constructor(private store: Store) {
    this.personas$ = this.store.select(selectAllPersonas);
  }

  addPersona() {
    this.store.dispatch(personaActions.addPersona({ persona: this.newPersona }));
    this.newPersona = { name: '', age: 0, mail: '' };
  }

  deletePersona(id: string) {
    this.store.dispatch(personaActions.deletePersona({ id }));
  }
}
