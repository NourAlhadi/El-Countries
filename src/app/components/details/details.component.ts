import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from '../../_services/search.service';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  item;
  borders;
  languages;
  currencies;
  

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute,
              private _searchService: SearchService,
              private router: Router) {
  }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    this.routeSub = this.route.params.subscribe(params => {
      const code = params['param'];
      this.fetchCountry(code);
    });
  }

  ngOnDestroy(){
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
}


  fetchCountry(code: string) {
    let obsrv = this._searchService.getByCode(code);
    obsrv.subscribe(res => {
      this.item = res;
      this.currencies = [];
      for (let curr of this.item.currencies){
        this.currencies.push(curr.name + "(" + curr.code + ")");
      }

      this.languages = [];
      for (let lang of this.item.languages){
        this.languages.push(lang.name + "(" + lang.nativeName + ")");
      }

      this.borders = [];
      for (let border of this.item.borders){
        this._searchService.getByCode(border).subscribe(res => {
          if (res.name === 'Israel') res.name = 'Palestine';
          this.borders.push(res.name);
        }, err => {
          console.log(err);
        });
      }

      
    }, err => {
      this.router.navigate(['/countries/error']);
    });
  }

  goTo(url) {
    this.router.navigate([url]);
  }
}
