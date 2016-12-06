import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';

@Component({
    selector: 'navbar-head',
    styleUrls: ['./navbar-head.css'],
    templateUrl: './navbar-head.html',
    inputs: ['title']
})

export class NavbarHeadComponent{
    title: String;
}
