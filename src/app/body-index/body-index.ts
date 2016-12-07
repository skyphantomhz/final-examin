import { Component, OnInit, Injectable, EventEmitter } from '@angular/core';
import { Shoes } from '../bean/shoes';
@Component({
    styleUrls: ['./body-index.css'],
    templateUrl: './body-index.html'
})

export class BodyIndexComponent {
    title: string;
    shoesList: Shoes[];
    onShoesSelected: EventEmitter<Shoes>;
    currentShoes: Shoes;
    constructor() {
        
        this.onShoesSelected = new EventEmitter();
        this.shoesList = [
            new Shoes('MS01',
                'Products title',
                'mastermind',
                'Adidas AG (German pronunciation:) (stylized as ɑdidɑs) is a German multinational corporation that designs and manufactures sports shoes',
                'Adidas was registered on 18 August 1949 by Adolf Dassler, following a family feud at the Gebrüder Dassler Schuhfabrik company between him and his older brother Rudolf.[1] Rudolf had earlier established Puma, which quickly became the business rival of Adidas and is also headquartered in Herzogenaurach. The company`s clothing and shoe designs typically feature three parallel bars, and the same motif is incorporated into Adidas`s current official logo.[4][5] The brand name is uncapitalized, with a lower case .', 'http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwce32303b/zoom/M20324_01_standard.jpg?sw=640&sfrm=jpg'),
                new Shoes('MS02',
                'Adidas',
                'ngoc Trang',
                'Nice shoes',
                'Adidas was registered on 18 August 1949 by Adolf Dassler, following a family feud at the Gebrüder Dassler Schuhfabrik company between him and his older brother Rudolf.[1] Rudolf had earlier established Puma, which quickly became the business rival of Adidas and is also headquartered in Herzogenaurach. The company`s clothing and shoe designs typically feature three parallel bars, and the same motif is incorporated into Adidas`s current official logo.[4][5] The brand name is uncapitalized, with a lower case .', 'https://ae01.alicdn.com/kf/HTB1k3cfKFXXXXbkXXXXq6xXFXXXx/2016-new-black-color-font-b-sport-b-font-font-b-shoes-b-font-woman-and.jpg'),
                new Shoes('MS03',
                'Products title',
                'user',
                'Adidas AG (German pronunciation:) (stylized as ɑdidɑs) is a German multinational corporation that designs and manufactures sports shoes',
                'Adidas was registered on 18 August 1949 by Adolf Dassler, following a family feud at the Gebrüder Dassler Schuhfabrik company between him and his older brother Rudolf.[1] Rudolf had earlier established Puma, which quickly became the business rival of Adidas and is also headquartered in Herzogenaurach. The company`s clothing and shoe designs typically feature three parallel bars, and the same motif is incorporated into Adidas`s current official logo.[4][5] The brand name is uncapitalized, with a lower case .', 'http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dwce32303b/zoom/M20324_01_standard.jpg?sw=640&sfrm=jpg')
        ];
        console.log(this.shoesList);
        this.title = 'true';
    }
    clicked(shoes: Shoes): void {
        this.currentShoes = shoes;
        this.onShoesSelected.emit(shoes);
    }
    isSelected(shoes: Shoes): boolean {
        if (!shoes || !this.currentShoes) {
            return false;
        }
        return shoes.id === this.currentShoes.id;
    }
}