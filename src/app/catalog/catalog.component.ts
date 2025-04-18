import { Component, inject } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'kbot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  filter: string = '';
  products: IProduct[] = [];

  // expermenting with inject function
  //private cartSvc: CartService = inject(CartService);


  // constructor injection
  constructor(private cartService: CartService, private productService: ProductService) {
    console.log("CatalogComponent constructor called");
  }

  ngOnInit() {
    let observableProducts = this.productService.getProducts();

    observableProducts.subscribe({
      next: (products) => this.products = products,
      error: (err) => console.log("Error loading products: " + err),
      complete: () => console.log("Products loaded")
    });
  }

  getDiscountedClasses(product: IProduct) {
    return product.discount > 0 ? ["strikethrough bold"] : [];
  }

  getDiscountedPrice(product: IProduct): number {
    return product.price * .5;
  }

  hasDiscount(product: IProduct): boolean {
    return product.discount > 0;
  }

  getFilteredProducts(): IProduct[] {
    console.log("Filtered on value: " + this.filter);

    return this.filter === '' ? this.products : this.products.filter(product => product.category === this.filter);

  }

  getImageUrl(product: IProduct) {
    return 'assets/images/robot-parts/' + product?.imageName;
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
  }

}
