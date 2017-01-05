import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
import { Product } from '../bean/product';
import { ProductService } from '../_service/product.service';
@Component({
    styleUrls: ['./body-index.css'],
    templateUrl: './body-index.html'
})

export class BodyIndexComponent implements OnInit {
    title: string;
    productList: Product[];
    ads: string;
    constructor(private ProductService: ProductService) {
        //quang cao
        this.ads="../assets/images/slide2.jpg";

        this.productList = [
            new Product(1,
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
        ];
        this.title = 'true';
    }
    ngOnInit(){
        // this.shoesService.getShoes()
        // .subscribe(shoess => {
        //     this.shoesList = shoess;
        // });
        
    }
}