import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { SearchService } from '../../_services/search.service';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  items: [];
  private query: string;
  private searchBy: string;

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute,
              private _searchService: SearchService,
              private router: Router) {
  }

  ngOnInit() {
    this.searchBy = 'name';
    var rellaxHeader = new Rellax('.rellax-header');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    this.routeSub = this.route.params.subscribe(params => {
      if (params['param'] === undefined || params['param'].indexOf('_') === -1) {
        this.query = '';
        this.searchBy = 'all';
      }else {
        const param = params['param'].split('_');
        this.query = param[1];
        this.searchBy = param[0];
      }

      this.fetchList();
    });
  }

  ngOnDestroy(){
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
}


  fetchList() {
    let obsrv: any;
    
    switch(this.searchBy){
      case 'all': obsrv = this._searchService.getAll(); break;
      case 'name': obsrv = this._searchService.getByName(this.query); break;
      case 'code': obsrv = this._searchService.getByCode(this.query); break;
      case 'lang': obsrv = this._searchService.getByLang(this.query); break;
      case 'capital': obsrv = this._searchService.getByCaptial(this.query); break;
      case 'currency': obsrv = this._searchService.getByCurrency(this.query); break;
      case 'call': obsrv = this._searchService.getByCallingCode(this.query); break;
      default: obsrv = this._searchService.getAll();
    }

    obsrv.subscribe(res => {
      if (!Array.isArray(res)) {
        res = [res];
      }
      this.items = res;
    }, err => {
      this.router.navigate(['/countries/error']);
    });
  }

  goTo(url) {
      this.router.navigate([url]);
  }
}
