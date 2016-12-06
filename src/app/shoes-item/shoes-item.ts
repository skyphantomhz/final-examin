import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
import {Shoes} from '../bean/shoes';
@Component({
    selector: 'shoes-item',
    styleUrls: ['./shoes-item.css'],
    templateUrl: './shoes-item.html',
    inputs: ['shoesItem']
})

export class ShoesItemComponent{
    shoesItem: Shoes;
}