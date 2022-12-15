import { Injectable } from '@angular/core';
import {Contact} from "../models/contact";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * Permet de sauvegarder les contacts.
   */
  saveContacts(contacts: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  /**
   * Permet récupérer les contacts sauvegardés.
   * @return array
   */
  getContacts(): Contact[] {
    return JSON.parse(<string>localStorage.getItem('contacts')) ?? [];
  }

}
