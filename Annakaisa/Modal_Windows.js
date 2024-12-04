//blogi//
//Modal ikkunat
function openModal(modalId) {
    // Kaikkijen Modal ikkunoiden kiinnitys jos avat uuttaa Modal ikkuna
    var allModals = document.getElementsByClassName("modal");
    for (var i = 0; i < allModals.length; i++) {
        allModals[i].style.display = "none";
    }

    // Valittun Modal ikkunoiden avaus
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Modal ikkunan kiinnitys
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Modal ikkunoiden kiinnitys jos painat jossain mualla
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}