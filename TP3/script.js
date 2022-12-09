/** --------------------- | Initialisation | --------------------- **/

let contacts = []; // Initialisation du tableau de contacts

/** --------------------- | Traitement du Formulaire | --------------------- **/


// 1. Création d'un nouveau contact
$('#contact').submit(function (e) {

    // -- A la soumission du formulaire, on stop la redirection
    e.preventDefault();

    // -- Avec l'aide de bootstrap, on fait un retour à l'utilisateur
    // NB : "this" correspond au formulaire #contact. console.log(this);
    this.classList.add('was-validated');

    /**
     * Si notre formulaire est bien valide,
     * alors on peux créer notre contact.
     */
    // console.log(this.checkValidity());
    if (this.checkValidity()) {
        // Création d'un contact
        createContact();

        // Réinitialisation du formulaire et de la validation.
        this.reset();
        this.classList.remove('was-validated');
    }


}); // $('#contact').submit();

/** --------------------- | Au Chargement de ma page | --------------------- **/

$(() => {
    // Je rafraichi mes contacts et je les affiches.
    refreshContacts();
});

/**
 * Etant donné que les liens sont ajouté de façon dynamique.
 * Nous devons utiliser la délégation d'évènement de jQuery.
 * Voir. https://api.jquery.com/on/ : "Delegated event handlers"
 */

// On écoute, l'ensemble des liens ".contact" du ".list-group"
$('.list-group').on("click", ".contact", function () {
    // Au clic, on met à jour l'affichage du profil.
    $('.name').text($(this).attr('data-name'));
    $('.username').text($(this).attr('data-username'));
    // Génération du QrCode
    $('#qrcode').empty();
    new QRCode(document.getElementById("qrcode"),
        getVcard($(this).attr('data-name'), $(this).attr('data-email')));
});

// On écoute, l'ensemble des liens ".contact" du ".list-group"
$('.list-group').on("click", ".contact__delete", function () {
    // Au clic, on appel la fonction de suppression.
    deleteContact(parseInt($(this).attr('data-id')));
});

/** --------------------- | Fonctions | --------------------- **/

/**
 * Permet de créer un contact à partir
 * des données du formulaire
 */
function createContact() {

    // Création du contact
    contacts.push({
        id: Date.now(),
        name: $('input[name=name]').val(),
        username: $('input[name=username]').val(),
        email: $('input[name=email]').val()
    });

    // Sauvegardes des contacts
    saveContacts();
}

/**
 * Permet d'afficher les  contacts à partir
 * des données du storage.
 */
function displayContacts() {

    // Réinitialiser l'affichage
    $('.list-group').empty();
    $('.alert.alert-info').hide();

    // Affichage de l'alerte
    if (contacts.length === 0) {
        $('.alert.alert-info').show();
    }

    // Affichage des contacts
    contacts.forEach(contact => {
        $('.list-group').append(`
            <a class="contact list-group-item d-flex justify-content-between align-items-center"
                data-name="${contact.name}" 
                data-username="${contact.username}"
                data-email="${contact.email}" 
                href="javascript:void(0)" aria-current="true">
                ${contact.name}
                <button data-id="${contact.id}" class="contact__delete btn btn-outline-danger">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </a>
        `);
    });
}

/**
 * Permet de supprimer un contact de la base.
 * @param id
 */
function deleteContact(id) {

    // Suppression du contact dans le tableau "contacts" via son ID.
    contacts.splice(contacts.findIndex(contact => contact.id === id), 1);

    // Sauvegarde et actualisation des données.
    saveContacts();
}

/**
 * Permet de sauvegarder les contacts.
 */
function saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(contacts));

    // Après la sauvegarde on actualise la liste.
    refreshContacts();
}

/**
 * Permet récupérer les contacts sauvegardés.
 * @return array
 */
function refreshContacts() {
    contacts = JSON.parse(localStorage.getItem('contacts')) ?? [];
    displayContacts();
}

/**
 * Permet de générer la vCard d'un contact
 * @return {string}
 */
function getVcard(name, email) {
    return `
BEGIN:VCARD
VERSION:3.0
FN:${name}
EMAIL;TYPE=PREF,INTERNET:${email}
END:VCARD
`;
}





















