import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'kbot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {


  filter: string = '';

  getDiscountedPrice(product: IProduct): number {
    return product.price * .5 ;
  }

  hasDiscount(product: IProduct): boolean {
    return product.discount > 0;
  }
  
  getFilteredProducts(): IProduct[] {
    console.log("Filtered on value: "+ this.filter);

    return this.filter === '' ? this.products: this.products.filter(product => product.category === this.filter);
    
  }

  getImageUrl(product: IProduct) {
    return 'assets/images/robot-parts/'+product?.imageName;
  }

  products: IProduct[];

  constructor(){
    this.products = [{
      id:1,
      description: "Red army favourite",
      name: "AK Arm",
      imageName: "arm-ak.png",
      category: "Arms",
      price: 10000,
      discount: 10
    },
    {
      id: 2,
      name: "Texas special",
      description: "Robot arm with a Chainsaw",
      imageName: "arm-chainsaw.png",
      category: "Arms",
      price: 8500,
      discount: 0
    },
    {
      id: 3,
      name: "Not from Musk",
      description: "Robot arm with a Flamethrower",
      imageName: "arm-flamethrower.png",
      category: "Arms",
      price: 9500,
      discount: 20
    },
    {
      id: 4,
      name: "Propeller arm large",
      description: "Robot arm with a Propeller",
      imageName: "arm-propeller.png",
      category: "Arms",
      price: 4000,
      discount: 0
    },
    {
      id: 5,
      name: "Picker grabber",
      description: "Robot arm with a Grabber",
      imageName: "arm-grabber.png",
      category: "Arms",
      price: 5000,
      discount: 30
    },
    {
      id: 6,
      name: "Crabby McClaws",
      description: "Robot arm with Dual Claws",
      imageName: "arm-dual-claw.png",
      category: "Arms",
      price: 7000,
      discount: 0
    },
    {
      id: 7,
      name: "Pocket rocket",
      description: "Robot base with a Rocket",
      imageName: "base-rocket.png",
      category: "Bases",
      price: 15000,
      discount: 40
    },
    {
      id: 8,
      name: "Unicyclops",
      description: "Robot base with Single Wheel",
      imageName: "base-single-wheel.png",
      category: "Bases",
      price: 6000,
      discount: 0
    },
    {
      id: 9,
      name: "Smeagol Eyes",
      description: "Robot head with Big Eyes",
      imageName: "head-big-eye.png",
      category: "Heads",
      price: 3000,
      discount: 50
    },
    {
      id: 10,
      name: "Friendly Head",
      description: "Friendly Bot Head",
      imageName: "head-friendly.png",
      category: "Heads",
      price: 2500,
      discount: 0
    },
    {
      id: 11,
      name: "Flexi Torso",
      description: "Robot torso with a Flexible Gauged design",
      imageName: "torso-flexible-gauged.png",
      category: "Torsos",
      price: 10000,
      discount: 35
    },
    {
      id: 12,
      name: "Kangaroo Mama",
      description: "Robot torso with a Pouch",
      imageName: "torso-pouch.png",
      category: "Torsos",
      price: 8500,
      discount: 0
    }]
  }

}
