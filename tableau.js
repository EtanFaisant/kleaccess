// Presentation layer
$(document).ready(function() {
    refresh();
});

function refresh() {
    const template = $("#credentials-table-template").html();

    const compiledTemplate = Handlebars.compile(template);

    const credentials = getAllCredentials();
    const content = compiledTemplate(credentials);
    $("#credentials-table-container").html(content);
}

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
        refresh();
        closeModal();
    });
}

function confirmModify(index) {
    const credential = retrieveCredential(index);

    // Instantiate template & insert it into DOM
    const template = $("#modal-modify-template").html();
    const compiledTemplate = Handlebars.compile(template);
    const content = compiledTemplate({ index, credential });
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

    $('#confirm-button').on('click', (event) => {
        const identity = $(event.target.form.elements.identity).val();
        const secret = $(event.target.form.elements.secret).val();
        const domain = $(event.target.form.elements.domain).val();
        const credential = { identity, secret, domain };
        updateCredential(index, credential);
        refresh();
        closeModal();
    });

}

function confirmAdd() {
    // Instantiate template & insert it into DOM
    const template = $("#modal-add-template").html();
    const compiledTemplate = Handlebars.compile(template);
    const content = compiledTemplate({ credential: {} });
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

    $('#confirm-button').on('click', (event) => {
        const identity = $(event.target.form.elements.identity).val();
        const secret = $(event.target.form.elements.secret).val();
        const domain = $(event.target.form.elements.domain).val();
        const credential = { identity, secret, domain };
        createCredential(credential);
        refresh();
        closeModal();
    });

}

function copyidentity() {
    var copyText = document.getElementById("identity");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function copysecret() {
    var copyText = document.getElementById("secret");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function copydomain() {
    var copyText = document.getElementById("domain");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function ShowHide() {
    var x = document.getElementById("secret");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}