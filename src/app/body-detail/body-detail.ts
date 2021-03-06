import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../bean/product';
@Component({
    styleUrls: ['./body-detail.css'],
    outputs: ['namePage'],
    templateUrl: './body-detail.html'
})

export class BodyDetailComponent {
    titlePage: string;
    myProduct: Product;
    id: number;
    private sub: any;
    constructor(private route: ActivatedRoute) {

        this.titlePage = '| Products';
        this.myProduct = new Product(1,
                'Products title',
                'hjh',
                'Adidas AG (German pronunciation:) (stylized as ɑdidɑs) is a German multinational corporation that designs and manufactures sports shoes',
                'Adidas was registered on 18 August 1949 by Adolf Dassler, following a family feud at the Gebrüder Dassler Schuhfabrik company between him and his older brother Rudolf.[1] Rudolf had earlier established Puma, which quickly became the business rival of Adidas and is also headquartered in Herzogenaurach. The company`s clothing and shoe designs typically feature three parallel bars, and the same motif is incorporated into Adidas`s current official logo.[4][5] The brand name is uncapitalized, with a lower case .', 
                '1000$',
                'http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwce32303b/zoom/M20324_01_standard.jpg?sw=640&sfrm=jpg',
                'mastermind',
                1,
                '1/21/2017',
                '1/21/2017') 

    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id =params['id']; // (+) converts string 'id' to a number

        });
    }


}