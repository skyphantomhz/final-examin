import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
import {Product} from '../bean/product';
@Component({
    selector: 'product-item',
    styleUrls: ['./product-item.css'],
    templateUrl: './product-item.html',
    inputs: ['productItem']
})

export class ProductItemComponent{
    productItem: Product;
}