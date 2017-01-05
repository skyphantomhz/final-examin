import {Component} from '@angular/core';
import {Product} from '../bean/product';
@Component({
  selector   : 'show-product',
  templateUrl: './show-product.html',
  styleUrls: ['./show-product.css']
})
export class ShowProduct {
  bool: number;
  ProductList: Product[];
  constructor(){
    this.bool=1;
    this.ProductList = [
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
  }
}