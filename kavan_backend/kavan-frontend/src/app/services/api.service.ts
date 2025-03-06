import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  // Categories
  getCategories(): Observable<any> {
    return this.http.get(`${this.BASE_URL}categories/`);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}categories/${id}/`);
  }

  // Products
  getProducts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}products/`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}products/${id}/`);
  }
}
