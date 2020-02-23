import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  productos:Product[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  getProductsSearchted(productos){
    this.productos=productos;
    
  }

}
