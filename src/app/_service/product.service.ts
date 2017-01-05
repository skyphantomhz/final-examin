import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { Product } from '../bean/product';

@Injectable()
export class ProductService {
    constructor(
        private http: Http) {
    }

    getProduct(): Observable<Product[]> {
        // add authorization header with jwt token
        // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        // let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://127.0.0.1:8000/product/')
            .map((response: Response) => response.json());
    }
}