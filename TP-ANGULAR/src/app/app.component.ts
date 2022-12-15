import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // -- Déclarer une variable
  title = 'Gestion de Contacts';

  /**
   * Contact, choisi et cliqué
   * par mon utilisateur.
   */
  contactActif: any;

  // -- Tableau de contacts
  contacts = [
    {
      id: 1,
      name: 'Hugo LIEGEARD',
      username: 'hugo.liegeard',
      email: 'hugo@biyn.media'
    },
    {
      id: 2,
      name: 'Cédric TEMPLIER',
      username: 'cedric.templier',
      email: 'cedric.templier@gmail.com'
    },
    {
      id: 3,
      name: 'Bruno BARON',
      username: 'bruno.baron',
      email: 'bruno.baron@gmail.com'
    },
    {
      id: 4,
      name: 'Aimad EL KAOURI',
      username: 'aimadelkarouri',
      email: 'aimadelkarouri@gmail.com'
    },
  ];

  /**
   * Permet d'afficher les informations
   * d'un contact passé en paramètre.
   * @param contact
   */
  displayContact(contact: any) {
    // console.log( contact );
    this.contactActif = contact;
  }
}
