// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Le site est chargé et prêt !");
    // Ajoutez des fonctionnalités supplémentaires ici si nécessaire
});


document.getElementById('age-form').addEventListener('submit', function(event) {
            event.preventDefault();

            var age = document.querySelector('button[name="age"]:checked').value;

            if (age === 'yes') {
                window.location.href = 'page.html'; // Remplacer 'main.html' par l'URL de votre page de destination
            } else {
                alert('Vous devez avoir plus de 18 ans pour accéder à ce site.');
            }
});