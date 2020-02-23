import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CarritoItem } from 'src/app/models/carritoItem.model';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  @Input()  items:any[] = []; 

  @Output() obtenerCarro=new EventEmitter<CarritoItem[]>();

  itemCarrito:CarritoItem[]=[];
  producto:Product;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(item:Product){
   let itemNuevo:CarritoItem=new CarritoItem();
   itemNuevo.producto=item;
   itemNuevo.cantidad=1;
   this.itemCarrito.push(itemNuevo);
   console.log(this.itemCarrito);
   this.enviarItemsHome();

  }

  enviarItemsHome(){
    this.obtenerCarro.emit(this.itemCarrito);
  }

}
