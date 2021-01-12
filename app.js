import { refresh } from './credentials-table.js'
import { copyidentity, copysecret, copydomain, ShowHide } from './utils.js';

window.copyidentity = copyidentity;
window.copysecret = copysecret;
window.copydomain = copydomain;
window.ShowHide = ShowHide;

$(document).ready(function () {
    refresh();
});

