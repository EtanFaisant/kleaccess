import Handlebars from 'https://cdn.skypack.dev/handlebars';

import { deleteCredential } from './storage.js';
import { refresh } from './credentials-table.js';

const deleteModalTemplate = `
<div id="overlay" class="overlay">
    <div id="card-test" class="card-test">
        <form ngativevalidate class="container ng-pristine ng-invalid ng-touched">
            <div class="row justify-content-md-center mt-6">
                <div class="col-6">
                    <div class="card d-block">
                        <div class="card-body">
                            <div class="text-center">
                                <h4> Supprimer l'élément </h4>
                                <br />
                                <h8> Vous voulez vraiment supprimer cet élément ?</h8>
                                <br />
                                <h9> Cette action est irréversible !</h9>
                                <br />
                                <br />
                                <button id="confirm-button" type="button" class="btn btn-success">Confirmer</button>
                                <button id="cancel-button" type="button" class="btn btn-danger">Annuler</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
`;

export function confirmDelete(index) {
    // Instantiate template & insert it into DOM
    const template = deleteModalTemplate;
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