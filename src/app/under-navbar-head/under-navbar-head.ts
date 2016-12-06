import { Component } from '@angular/core';

@Component({
    selector: 'under-navbar-head',
    styleUrls: ['./under-navbar-head.css'],
    inputs: ['home'],
    templateUrl: './under-navbar-head.html'
})

export class UnderNavbarHeadComponent {
    home: string;
 }