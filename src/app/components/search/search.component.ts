import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  prodBuscados:Product[]=[];
  loading:boolean;
  termino:string='';

  @Output() obtener=new EventEmitter<Product[]>();

  constructor(private productService:ProductosService) { 
    
  }

  ngOnInit(): void {
    
  }

  onClickSubmit(FormData){
    this.termino=FormData.termino;
    this.loading=true;
    this.productService.getSearchProds(this.termino).subscribe(
      
      (data:any)=>{
        this.prodBuscados=data;
        console.log(this.prodBuscados);
        this.enviarLista();
      }
    )
    
    
  }

  enviarLista(){
    
    this.obtener.emit(this.prodBuscados);  
  }


}
