import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shoes } from '../bean/shoes';
@Component({
    styleUrls: ['./body-detail.css'],
    outputs: ['namePage'],
    templateUrl: './body-detail.html'
})

export class BodyDetailComponent {
    titlePage: string;
    myShoes: Shoes;
    id: string;
    private sub: any;
    constructor(private route: ActivatedRoute) {

        this.titlePage = '| Products';
        this.myShoes = new Shoes('MS01',
            'Products title',
            'user',
            'Adidas AG (German pronunciation:) (stylized as ɑdidɑs) is a German multinational corporation that designs and manufactures sports shoes',
            'Adidas was registered on 18 August 1949 by Adolf Dassler, following a family feud at the Gebrüder Dassler Schuhfabrik company between him and his older brother Rudolf.[1] Rudolf had earlier established Puma, which quickly became the business rival of Adidas and is also headquartered in Herzogenaurach. The company`s clothing and shoe designs typically feature three parallel bars, and the same motif is incorporated into Adidas`s current official logo.[4][5] The brand name is uncapitalized, with a lower case .', 'https://ae01.alicdn.com/kf/HTB1k3cfKFXXXXbkXXXXq6xXFXXXx/2016-new-black-color-font-b-sport-b-font-font-b-shoes-b-font-woman-and.jpg');

    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id ="" +params['id']; // (+) converts string 'id' to a number

        });
    }


}