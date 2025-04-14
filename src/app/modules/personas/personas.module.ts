// modules/personas/personas.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';


import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListPageComponent } from './pages/list-page.component';
import { EditPageComponent } from './pages/edit-page.component';

@NgModule({
  declarations: [
    ListPageComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('personas', reducers.personas),
    RouterModule.forChild([
      { path: '', component: ListPageComponent },
      { path: 'edit/:id', component: EditPageComponent }
    ])
  ]
})
export class PersonasModule {}
