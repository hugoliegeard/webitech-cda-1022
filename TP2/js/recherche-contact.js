/**
 * Création de notre propre système DEBOUNCE.
 * Executer une fonction, après un certain délai,
 * après la fin de saisie par utilisateur.
 */

let compteurGlobal = 0;

function lookup(compteurLocal) {
    console.log(compteurLocal + ' --- ' + compteurGlobal);
    if (compteurLocal === compteurGlobal) {
        searchContact();
    }
}

function compteur() {
    compteurGlobal++;
    setTimeout("lookup(" + compteurGlobal + ")", 1000);
}

// -- Version avec notre propre compteur
// $('#search').on('input', compteur);

// -- Version avec lodash
$('#search').on('input', _.debounce(searchContact, 1000));

// ----------------------------------------------------------------- //

/**
 * Au chargement de la page et jQuery on vérifie l'existante des contacts
 * dans le localstorage, si non, on les récupère depuis l'API.
 */
$(function () {
    if (!sessionStorage.getItem('contacts')) {
        $.getJSON("https://jsonplaceholder.typicode.com/users", contacts => {
            sessionStorage.setItem('contacts', JSON.stringify(contacts));
        });
    }
});

function searchContact() {

    /**
     * On arrive dans cette fonction, quand l'utilisateur
     * a saisie un texte dans le champ INPUT.
     */

        // 1a. Récupération de la saisie de l'utilisateur
    const searchParam = $('#search').val().toLowerCase();
    // console.log(searchParam);

    // 1b. Réinitialisation des résultats
    $('.resultat').slideUp().empty();

    // 2. Récupération des contacts de l'API en JSON
    // $.getJSON('https://jsonplaceholder.typicode.com/users', contacts => {

    // 3. Vérifier les données reçues.
    // console.log(contacts);

    /**
     * A cette étape, on obtient ici la liste de tous les contacts
     * de l'API, qu'il faut maintenant filtrer via "searchParam"
     */

    // 4. Filtrer les contacts de l'API par rapport au "searchParam"
    // a. Parcourir mes différents contacts
    // contacts.forEach(contact => {
    JSON.parse(sessionStorage.getItem('contacts')).forEach(contact => {

        /**
         * Ici dans cette fonction on va parcourir chaque contact de l'API
         * a la recherche d'une correspondance.
         */

        // b. Comparer mon "searchParam" avec les propriétés de chaque contact
        if (contact.name.toLowerCase().includes(searchParam)
            || contact.username.toLowerCase().includes(searchParam)
            || contact.email.toLowerCase().includes(searchParam)
            || contact.phone.toLowerCase().includes(searchParam)) {

            /**
             * A cette étape, on obtient uniquement les correspondances
             * de contact avec le "searchParam"
             */
            // c. On affiche dans resultat, les correspondances

            $('.resultat').append(`
                    <div class="membre">
                        <div class="membre_informations">
                            <p>Nom Complet : ${contact.name}</p>
                            <p>Username : ${contact.username}</p>
                            <p>Email : ${contact.email}</p>
                            <p>Téléphone : ${contact.phone}</p>
                        </div>
                    </div>
                `).slideDown();

        } // end if includes

    }); // end forEach(contact)

    // }); // fin $.getJSON

} // end searchContact()



