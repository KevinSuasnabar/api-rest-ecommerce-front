import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Product } from 'src/app/models/product.model';
import { CarritoItem } from 'src/app/models/carritoItem.model';
import { Carrito } from 'src/app/models/carrito.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  listaProductos:Product[]=[];
  loading:boolean;
  itemsEnCarro:CarritoItem[]=[];
  carrito:Carrito;

  constructor(private productosService:ProductosService) { 
  }

  ngOnInit(): void {
    this.getProductosIniciales();
  }

  getProductosIniciales(){
    this.loading=true;
    this.productosService.getProducts().subscribe(
      (data:any)=>this.listaProductos=data
    );
  }

  getProductsSearchted(productos){
    this.listaProductos=productos;
    
  }


  getCarritoCompras(listaEnCarro):CarritoItem[]{
    return this.itemsEnCarro=listaEnCarro;
  }

  openCarrito(){
    console.log(this.itemsEnCarro);
  }

}
