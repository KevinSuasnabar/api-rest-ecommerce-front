import { Component, OnInit, Input } from '@angular/core';
import { CarritoItem } from 'src/app/models/carritoItem.model';

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.css']
})
export class CarroComprasComponent implements OnInit {

  @Input() itemsCarrito:CarritoItem[];

  
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
