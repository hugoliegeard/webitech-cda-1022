import {Component, Input} from '@angular/core';
import {Contact} from "../../models/contact";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  @Input() contactProfil: Contact;
}
