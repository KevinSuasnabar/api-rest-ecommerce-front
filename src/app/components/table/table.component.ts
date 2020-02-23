import { Component, OnInit, Input } from '@angular/core';
import { CarritoItem } from 'src/app/models/carritoItem.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() items:CarritoItem[];
  headElements = ['ID', 'Nombre', 'Precio', 'cantidad'];

  constructor() { }

  ngOnInit(): void {
  }

}
