import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  imports: [ProductCardComponent]
})
export class ProductListComponent {
  // https://jsonplaceholder.typicode.com/photos

  products = signal<Product[]>([
    {
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "price": 21.3,
      "stock": 5,
      "image": "images/salus5.jpg"
    },
    {
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "price": 34.2,
      "image": "images/salus4.webp"
    },
    {
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "price": 31.1,
      "stock": 10,
      "image": "images/salus3.webp"
    },
    {
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "price": 76,
      "stock": 45,
      "image": "images/salus2.webp"
    },
    {
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "price": 54.3,
      "stock": 21,
      "image": "images/salus1.webp"
    }
  ])

}
