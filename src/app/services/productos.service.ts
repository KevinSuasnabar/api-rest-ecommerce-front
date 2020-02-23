import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from "rxjs/operators";
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private endPoint: string = "http://localhost:8080/api";

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product>(`${this.endPoint}/products`);
                
  }

  getSearchProds(term:string){
    return this.http.get<Product>(`${this.endPoint}/products/${term}`);
  }
}
