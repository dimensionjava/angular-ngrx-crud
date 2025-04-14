// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './modules/personas/store';
import { AppComponent } from './app.component';
import { PersonasModule } from './modules/personas/personas.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PersonasModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot([
      { path: 'personas', loadChildren: () => import('./modules/personas/personas.module').then(m => m.PersonasModule) },
      { path: '', redirectTo: 'personas', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
