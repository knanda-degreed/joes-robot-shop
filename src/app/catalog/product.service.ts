import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
    console.log("ProductService constructor called");
  }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('api/products');
  }
}
