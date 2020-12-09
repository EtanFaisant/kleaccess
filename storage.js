// Data layer
function saveCredentials(credentials) {
    localStorage.setItem('Cred', JSON.stringify(credentials));
    // sessionStorage.setItem('Cred', JSON.stringify(credentials));
}

function loadCredentials() {
    return JSON.parse(localStorage.getItem('Cred')) || [];
    // return JSON.parse(sessionStorage.getItem('Cred')) || [];
}


// Model layer
function getAllCredentials() {
    return loadCredentials();
}

function createCredential(credential) {
    let credentials = loadCredentials();
    credentials.push(credential);
    saveCredentials(credentials);
}

function retrieveCredential(index) {
    let credentials = loadCredentials();
    return credentials[index];
}

function updateCredential(index, credential) {
    let credentials = loadCredentials();
    credentials[index] = credential;
    saveCredentials(credentials);
}

function deleteCredential(index) {
    let credentials = loadCredentials();
    credentials.splice(index, 1);
    saveCredentials(credentials);
}



var cast = {
    "toto": [
        {
            "domain": "Kleaccess",
            "identity": "Titi",
            "secret": "1234567890"
        }
    ]
}


// Presentation layer
$(document).ready(function () {
    const listTemplate = $("#credentials-list-template").html();

    const compiledListTemplate = Handlebars.compile(listTemplate);
    console.log(compiledListTemplate);

    const credentials = getAllCredentials();
    const listContent = compiledListTemplate(credentials);
    $("#credentials-list").html(listContent);
});








