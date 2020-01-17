import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { SearchService } from '../../_services/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private query: string;
  private searchBy: string;

  private routeSub: Subscription;
  constructor(private route: ActivatedRoute,
              private _searchService: SearchService) {
  }

  ngOnInit() {
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


  fetchList() {
    let obsrv: any;
    
    console.log(this.query + " " + this.searchBy);
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
      console.log(res);
      
    }, err => {
      console.log(err)
    });
  }
}
