// modules/personas/pages/edit-page/edit-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';
import { personaActions, selectPersonaById } from '../store';

@Component({
  selector: 'app-edit-page',
  standalone: false,
  template: `
    <h2>Editar Persona</h2>

    <form *ngIf="persona$ | async as persona" (ngSubmit)="updatePersona(persona.id)">
      <input [(ngModel)]="persona.name" name="name" placeholder="Nombre" required>
      <input [(ngModel)]="persona.age" type="number" name="age" placeholder="Edad" required>
      <input [(ngModel)]="persona.mail" type="email" name="mail" placeholder="Email" required>
      <button type="submit">Actualizar</button>
    </form>
  `
})
export class EditPageComponent implements OnInit {
  persona$: Observable<Persona | undefined>;
  editedPersona: Partial<Omit<Persona, 'id'>> = {};

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.persona$ = this.store.select(selectPersonaById(id));
  }

  ngOnInit() {
    this.persona$.subscribe(persona => {
      if (persona) {
        this.editedPersona = { ...persona };
      }
    });
  }

  updatePersona(id: string) {
    this.store.dispatch(
      personaActions.updatePersona({
        id,
        changes: this.editedPersona
      })
    );
  }
}
