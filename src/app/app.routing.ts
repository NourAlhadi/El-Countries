import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
    { path: '', redirectTo: 'countries', pathMatch: 'full' },
    { path: 'countries', loadChildren: './components/components.module#ComponentsModule'},
    { path: '**', redirectTo: ''},
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
