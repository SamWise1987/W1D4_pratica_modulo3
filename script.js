document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene il comportamento di invio standard del form

    var formData = {
        name: document.getElementById('feedback-name').value,
        email: document.getElementById('feedback-email').value,
        message: document.getElementById('feedback-message').value
    };

    // Qui va aggiunta la logica lato server per inviare i dati del form
    console.log('Dati del form inviati:', formData);

    
    // this.reset(); // Resetta il form dopo l'invio -> reminder per form futuri
});
