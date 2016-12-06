import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';

@Component({
    styleUrls: ['./admin-page.css'],
    templateUrl: './admin-page.html'
})

export class AdminPageComponent{
    titlePage: string;
    constructor(){
        this.titlePage='| Admin';
    }
}