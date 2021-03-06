import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components.routing';
import { AskComponent } from './ask/ask.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        ComponentsRoutingModule,
      ],
    declarations: [
        ComponentsComponent,
        AskComponent,
        HomeComponent,
        ListComponent,
        DetailsComponent,
        ErrorComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
