import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ApiImage{
  url:string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 url = 'http://localhost:8100'
  constructor(private http :HttpClient) {}

  getImages(){
    return this.http.get<ApiImage[]>(`{this.url}/image`);
  }
}
