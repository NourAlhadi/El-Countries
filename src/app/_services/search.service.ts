import {Injectable} from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    constructor(private api: ApiService) { }

    getAll() {
        return this.api.get(`all`);
    }

    getByName(query: string): any {
        return this.api.get(`name/${query}`);
    }

    getByCode(query: string): any {
        return this.api.get(`alpha/${query}`);
    }
    
    getByLang(query: string): any {
        return this.api.get(`lang/${query}`);
    }
    
    getByCaptial(query: string): any {
        return this.api.get(`capital/${query}`);
    }
    
    getByCurrency(query: string): any {
        return this.api.get(`currency/${query}`);
    }
    
    getByCallingCode(query: string): any {
        return this.api.get(`callingcode/${query}`);
    }
    
}