// Initialisation de emailJS
emailjs.init('GqyPbFXi8VEW5knOs');

// 1. Ecouter la soumission du formulaire
$('#contact').submit(function (e) {

    // 2a. Bloquer la redirection de la page
    e.preventDefault();

    // 2b. Réinitialisation des erreurs
    $('.is-invalid').removeClass('is-invalid');
    $('.alert.alert-danger').remove();

    // 3. Récupérer les éléments à vérifier
    const nom = $('input[name=nom]');
    const email = $('input[name=email]');
    const tel = $('input[name=tel]');
    const message = $('textarea[name=message]');
    const response = grecaptcha.getResponse();

    // 4. Vérification des champs.

    // -- Nom OBLIGATOIRE
    if (nom.val().length === 0) {
        nom.addClass('is-invalid');
    }

    // -- Email OBLIGATOIRE
    if (email.val().length === 0) {
        email.addClass('is-invalid');
    }
    // -- Vérifier le format de l'email (regex)
    const regexEmail = new RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm);
    if (!regexEmail.test(email.val())) {
        email.addClass('is-invalid');
    }
    // -- Tel OBLIGATOIRE
    if (tel.val().length === 0) {
        tel.addClass('is-invalid');
    }
    // -- Vérifier le format du tel (regex)
    const regexTel = new RegExp(/^(0|(\+[0-9]{2}[. -]?))[1-9]([. -]?[0-9][0-9]){4}$/);
    if (!regexTel.test(tel.val())) {
        tel.addClass('is-invalid');
    }
    // -- Message OBLIGATOIRE
    if (message.val().length === 0) {
        message.addClass('is-invalid');
    }

    // -- Comment je fais pour savoir s'il y a eu des erreurs ?
    // -- Je compte les nombre de class invalid de ma page.
    if ($('.is-invalid').length === 0 && response.length !== 0) {

        // Pas d'erreur, le formulaire est valide, on envoi notre email.
        const serviceID = 'default_service';
        const templateID = 'template_7v51v74';
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {

                // L'email a bien été envoyé. On affiche une confirmation.
                $('#contact').replaceWith(`
                    <div class="alert alert-success">
                        Merci, votre demande de contact
                        a bien été prise en compte.
                    </div>
                `);

            }, (err) => {
                console.log(err);
            });

    } else {
        $(this).prepend(`
            <div class="alert alert-danger">
                Attention, nous n'avons pas été en mesure
                de traiter votre demande.<br>
                <u>Vérifiez vos informations.</u>
            </div>   
        `);
    }

});