import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

type HttpOptions = {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
};

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private _apiUrlSubject: ReplaySubject<string> = new ReplaySubject();

    constructor(private _http: HttpClient) {
        this._init();
    }

    private _apiUrl() {
        return this._apiUrlSubject.asObservable();
    }

    private _init() {
        this._apiUrlSubject.next("https://restcountries.eu/rest/v2/");
        return;
    }

    public get<T>(url: string, options?: HttpOptions) {
        return this._apiUrl().pipe(
            switchMap(apiUrl => {
                return this._http.get<T>(`${apiUrl}${url}`, options);
            })
        );
    }

}