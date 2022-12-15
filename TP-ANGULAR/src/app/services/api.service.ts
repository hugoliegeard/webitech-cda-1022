import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../models/contact";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Retourne les contacts de l'API
   */
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://jsonplaceholder.typicode.com/users');
  }

}
