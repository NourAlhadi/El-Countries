import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnDestroy {
    
  constructor(private _router:Router) {
  }
  
  ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');
      console.log(document.getElementsByTagName('nav'));
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

    goTo(url) {
        this._router.navigate([url]);
    }

}
