import Handlebars from 'https://cdn.skypack.dev/handlebars';

import { getAllCredentials } from './storage.js';
import { confirmAdd } from './add-modal.js';
import { confirmModify } from './modify-modal.js';
import { confirmDelete } from './delete-modal.js';

window.confirmAdd = confirmAdd;
window.confirmModify = confirmModify;
window.confirmDelete = confirmDelete;

const tableModalTemplate = `
    <table class="styled-table">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Username</th>
                <th scope="col">Domain </th>
                <th> <button onclick="confirmAdd()" class="Addelement" href="#" role="button">Ajouter un element<svg width="1.5em"
                    height="1.5em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg></button></th>
                
            </tr>
        </thead>

        <tbody>
            {{#each this}}
            <tr>
                <th scope="row">{{@index}}</th>
                <td>{{identity}}</td>
                <td>{{domain}}</td>
                <td>
                    <a id="btpopup" class="btn btn-outline-muted" role="button" onclick="confirmModify ({{@index}}); return false">
                        <img src="bootstrap-icons-1.2.1/pencil-square.svg" width="16" height="16" alt="Bootstrap">
                    </a>
                    <a class="btn btn-outline-muted" onclick="confirmDelete({{@index}}); return false">
                        <img src="bootstrap-icons-1.2.1/trash.svg" width="16" height="16" alt="Bootstrap">
                    </a>
                </td>
            </tr>
            {{/each}}
        </tbody>

`

export function refresh() {
    const template = tableModalTemplate;

    const compiledTemplate = Handlebars.compile(template);

    const credentials = getAllCredentials();
    const content = compiledTemplate(credentials);
    $("#credentials-table-container").html(content);
}
