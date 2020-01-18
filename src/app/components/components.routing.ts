import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { AskComponent } from './ask/ask.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [{
  path: '',
  component: ComponentsComponent,
  children: [
    { path: 'ask', component: AskComponent, pathMatch: 'full' },
    { path: 'list/:param', component: ListComponent, pathMatch: 'full' },
    { path: 'list', component: ListComponent, pathMatch: 'full' },
    { path: 'details/:param', component: DetailsComponent, pathMatch: 'full' },
    { path: 'error', component: ErrorComponent, pathMatch: 'full' },
    { path: '', component: HomeComponent, pathMatch: 'full' },
  ],
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
    ],
})
export class ComponentsRoutingModule { }
