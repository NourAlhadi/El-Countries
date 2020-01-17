import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Rellax from 'rellax';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent  implements OnInit, OnDestroy {
    
  searchBy: string;
  query: string;

  constructor(private _router:Router) {
  }
  
  ngOnInit() {
      this.searchBy = 'name';
      var rellaxHeader = new Rellax('.rellax-header');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('index-page');
  }
  ngOnDestroy(){
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('index-page');
  }
  
  ask(){
    const param = this.searchBy + '_' + this.query;
    this._router.navigate(['/countries/list/' + param]);
  }
}
