import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page.component';
import { EditPageComponent } from './pages/edit-page.component';


const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: 'edit/:id', component: EditPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
