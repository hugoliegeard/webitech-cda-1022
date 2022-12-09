  
Atelier Javascript BLA - 2022

  
# Atelier Javascript n°1 
  

En vous appuyant sur les notions vu en cours et en vous aidant d'internet, vous mettez en place un système de recherche de contacts dans un annuaire via une API.
>API à utiliser :
>https://jsonplaceholder.typicode.com/users

Un visiteur doit pouvoir rechercher un contact sur la base de son `Username`, `Email`, `Phone` ou `Name` .

La recherche affichera sur la page, la liste des contacts correspondant aux critères de recherche dans une liste en dessous de la zone de recherche.

![enter image description here](https://raw.githubusercontent.com/hugoliegeard/WF3-Guadeloupe/7e02ff8bff6b7415173fb1e0b3863b4d57531617/12-Symfony/actuNews/public/images/articles/Capture%20d%E2%80%99%C3%A9cran%202022-12-07%20153122.png)

## Avant de commencer

Prenez connaissance de la structure HTML de la page.

Un champ input  à déjà été crée, vous pouvez vous appuyez dessus pour votre recherche. Le HTML est modifiable si besoin.
`<input type="text" id="search" placeholder="Rechercher un Contact...">`
 
 Vous afficherez le résultat de la recherche dans la div `<div class="resultat"></div>`

> NOTA BENE : Un exemple de structure HTML & CSS existe déjà dans cette div. Vous êtes libre de l'utiliser ou générer la votre.

## Consigne

Lors de la saisie d'un utilisateur dans le champ input, vous effectuerez la recherche de ce contact dans l'API suivante : https://jsonplaceholder.typicode.com/users.

Vous afficherez le résultat de votre recherche dans la page.

### Bonus 1
Lors de la saisie d'une recherche par l'utilisateur dans le champ `<input>`, la requête vers l'API ne devra se déclencher que quelques secondes (1000ms) après la fin de saisie de l'utilisateur. *On n'utilisera pas de bouton de recherche.*

### Bonus 2
Dans la fiche de résultat, vous inclurez une carte google maps, permettant d'indiquer l'emplacement géographique de l'utilisateur.

---  

Written with ❤️ by [Hugo LIEGEARD](https://github.com/hugoliegeard).  
