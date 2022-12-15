import {Component, OnInit} from '@angular/core';
import {Contact} from "./models/contact";
import {StorageService} from "./services/storage.service";
import {ApiService} from "./services/api.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  contacts$: Observable<Contact[]>;

  constructor(private storageService: StorageService,
              private apiService: ApiService) {
  }

  /**
   * Cette fonction est exécuté à la création du
   * composant par Angular, avant l'affichage
   * à l'utilisateur, après l'exeuction du
   * constructeur de la classe.
   */
  ngOnInit(): void {
    // this.contacts = this.storageService.getContacts();
    // this.apiService.getContacts().subscribe(contacts => {
    //   this.contacts = contacts;
    // });
    this.contacts$ = this.apiService.getContacts();
  }

  // -- Déclarer une variable
  title = 'Gestion de Contacts';

  /**
   * Contact, choisi et cliqué
   * par mon utilisateur.
   */
  contactActif: Contact;

  // -- Tableau de contacts
  contacts: Contact[] = [
    // {
    //   id: 1,
    //   name: 'Hugo LIEGEARD',
    //   username: 'hugo.liegeard',
    //   email: 'hugo@biyn.media'
    // },
    // {
    //   id: 2,
    //   name: 'Cédric TEMPLIER',
    //   username: 'cedric.templier',
    //   email: 'cedric.templier@gmail.com'
    // },
    // {
    //   id: 3,
    //   name: 'Bruno BARON',
    //   username: 'bruno.baron',
    //   email: 'bruno.baron@gmail.com'
    // },
    // {
    //   id: 4,
    //   name: 'Aimad EL KAOURI',
    //   username: 'aimadelkarouri',
    //   email: 'aimadelkarouri@gmail.com'
    // },
  ];

  /**
   * Permet d'afficher les informations
   * d'un contact passé en paramètre.
   * @param contact
   */
  displayContact(contact: Contact) {
    // console.log( contact );
    this.contactActif = contact;
  }

  pushContact(contact: Contact) {
    // -- Attribution d'un ID
    contact.id = Date.now();

    // -- Ajout du contact dans le tableau
    this.contacts.push(contact);

    // -- Sauvegarder les contacts
    this.saveContacts();
  }

  /**
   * Déclencher l'enregistrements
   * du tableau de contacts
   */
  saveContacts() {
    this.storageService.saveContacts( this.contacts );
  }

  /**
   * Permet de supprimer un contact.
   * @param contact
   */
  deleteContact(contact: Contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);

    // -- Sauvegarder les contacts
    this.saveContacts();
  }
}
