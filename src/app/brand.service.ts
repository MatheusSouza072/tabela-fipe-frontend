import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brand } from './models/brand.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BrandService {

  constructor(private http:HttpClient) {}

  private brandUrl = 'http://localhost:8091/'

  public getBrands() {
    return this.http.get<Brand[]>(this.brandUrl + "brand");
  }


}
