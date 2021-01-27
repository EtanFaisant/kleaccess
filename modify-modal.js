import Handlebars from 'https://cdn.skypack.dev/handlebars';

import { retrieveCredential, updateCredential } from './storage.js';
import { refresh } from './credentials-table.js';

const modifyModalTemplate = `

    <div id="overlay" class="overlay">
        <div id="card-test" class="card-test">
            <span id="btnClose" class="btnClose">&times;</span>
            <form id="updatengativevalidate" class="container ng-pristine ng-invalid ng-touched">
                <div class="row justify-content-md-center mt-6">
                    <div class="col-7">
                        <div class="card d-block">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="identity">Identifiant</label>
                                    <div class="d-flex">
                                        <div class="input-group mb-3">
                                            <input id="identity" type="text" name="identity" required inputmode="identity" appinputverbatim="false" class="form-control ng-pristine ng-invalid ng-touched" ng-reflect-required ng-reflect-app-input-verbatim="false" ng-reflect-name="identity" ng-reflect-model
                                                autocapitalize="none" autocorrect="none" spellcheck="false" value="{{credential.identity}}">
                                            <div class="input-group-append">
                                                <button onclick="copyidentity()" class="btn btn-outline-secondary" href="#" type="button">
                                                <span class="icon"><i class="fas fa-copy"></i></span>
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Mot de passe</label>
                                        <div class="d-flex">
                                            <div class="input-group mb-3">
                                                <input id="secret" name="secret" required appinputverbatim class="text-monospace form-control ng-untouched ng-pristine ng-invalid" ng-reflect-required ng-reflect-app-input-verbatim ng-reflect-name="password" type="password" ng-reflect-model autocomplete="off"
                                                    autocapitalize="none" autocorrect="none" spellcheck="false" value="{{credential.secret}}" inputmode="verbatim">
                                                <div class="input-group-append">
                                                    <button onclick="randompassword()" class="btn btn-outline-secondary" href="#" type="button">
                                                    <span class="icon"><i class="fas fa-sync"></i></span>
                                                </button>
                                                    <button onclick="ShowHide()" class="btn btn-outline-secondary" href="#" type="button">
                                                    <span class="icon"><i class="fas fa-eye"></i></span>
                                                </button>
                                                    <button onclick="copysecret()" class="btn btn-outline-secondary" href="#" type="button">
                                                    <span class="icon"><i class="fas fa-copy"></i></span>
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <label for="domain">URL</label>
                                        <div class="d-flex">
                                            <div class="input-group mb-3">
                                                <input id="domain" type="text" name="domain" required inputmode="domain" appinputverbatim="false" class="form-control ng-pristine ng-invalid ng-touched" ng-reflect-required ng-reklflect-app-input-verbatim="false" ng-reflect-name="Domain" ng-reflect-model
                                                    autocapitalize="none" autocorrect="none" spellcheck="false" value="{{credential.domain}}" placeholder="https://example.com" size="30" required>
                                                <div class="input-group-append">
                                                    <button onclick="copydomain()" class="btn btn-outline-secondary" href="#" type="button"> 
                                                    <span class="icon"><i class="fas fa-copy"></i></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <br>
                                        <button id="confirm-button" type="button" class="btn btn-success">Valider</button>
                                        <button id="cancel-button" type="button" class="btn btn-danger">Annuler</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>

`

export function confirmModify(index) {
    const credential = retrieveCredential(index);

    // Instantiate template & insert it into DOM
    const template = modifyModalTemplate;
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