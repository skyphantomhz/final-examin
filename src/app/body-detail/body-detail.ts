import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
import {Shoes} from '../bean/shoes';
@Component({
    styleUrls: ['./body-detail.css'],
    outputs: ['namePage'],
    templateUrl: './body-detail.html'
})

export class BodyDetailComponent{
    titlePage: string;
    constructor(){
        this.titlePage='| Products';
    }
    

}