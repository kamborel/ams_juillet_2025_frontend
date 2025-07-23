import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  constructor(private http:HttpClient){}

  getProviders(){
    return this.http.get('http://localhost:8080/providers/');
  }

   addProviders(provider:any){
    return this.http.post('http://localhost:8080/providers/', provider);
  }

  deleteProviders(id:any){
    return this.http.delete('http://localhost:8080/providers/'+id);
  }
}
