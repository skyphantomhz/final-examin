import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Category } from '../bean/categories';
import 'rxjs/add/operator/map'

import { Injectable } from '@angular/core';
@Injectable()
export class CategoryService {
    constructor(public http: Http) {
    }
    getAllCategory(): Observable<Category[]> {
        // add authorization header with jwt token
        
        // get users from api
        return this.http.get('http://localhost:8080/shop-restful-service/categories')
            .map((response: Response) => response.json());
    }
}