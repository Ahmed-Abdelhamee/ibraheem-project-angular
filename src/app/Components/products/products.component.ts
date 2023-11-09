import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private prodService: ProductsService) {}

  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe({
      next: (data) => {
        data.forEach((prod) => {
          prod.imageBase64 = this.getBase64Image(prod.imageBase64);
        });
        this.products = data;
      },
      error: (err) => console.log(err),
    });
  }

  getBase64Image(base64String: string) {
    return 'data:image/jpeg;base64,' + base64String;
  }
}
