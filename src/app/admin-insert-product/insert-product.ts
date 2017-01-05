import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../bean/categories';
import { CategoryService } from '../_service/category.service';

@Component({
    selector: 'insert-product',

    styleUrls: ['./insert-product.css'],
    templateUrl: './insert-product.html',

})

export class InsertProductComponent implements OnInit {
    loading: boolean;
    model: any = {};
    categoryList: Category[] = [];
    constructor(private router: Router,private categoryService: CategoryService) {
    }
    ngOnInit() {
        // get users from secure api end point
        this.categoryService.getAllCategory()
            .subscribe(categoryList => {
                this.categoryList = categoryList;
            });
    }
    insert(){
        this.loading=true;
    }
}