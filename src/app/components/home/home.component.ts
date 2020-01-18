import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    
  constructor(private _router:Router) {
  }
  
  ngOnInit() {
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

    goTo(url) {
        this._router.navigate([url]);
    }

}
