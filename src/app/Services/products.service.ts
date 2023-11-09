import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/Models/iproduct';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${environment.BaseApiUrl}/api/products/all`
    );
  }
}
