// Presentation layer
$(document).ready(function () {
    const template = $("#credentials-table-template").html();

    const compiledTemplate = Handlebars.compile(template);

    const credentials = getAllCredentials();
    const content = compiledTemplate(credentials);
    $("#credentials-table-container").html(content);
});


function confirmDelete(index) {
    // Instantiate template & insert it into DOM
    const template = $("#modal-delete-template").html();
    const compiledTemplate = Handlebars.compile(template);
    const content = compiledTemplate({ index });
    $("#modal-container").html(content);

    // Open template
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    $('#btnClose').on('click', closeModal);
    function closeModal() {
        overlay.style.display = 'none';
    }

    $('#cancel-button').on('click', () => {
        closeModal();
    });
    $('#confirm-button').on('click', () => {
        deleteCredential(index);
    });

}