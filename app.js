import { refresh } from './credentials-table.js'
import { copysitename, copyidentity, copysecret, copydomain, ShowHide, randompassword } from './utils.js';

window.copysitename = copysitename;
window.copyidentity = copyidentity;
window.copysecret = copysecret;
window.copydomain = copydomain;
window.ShowHide = ShowHide;
window.randompassword = randompassword;

$(document).ready(function () {
    refresh();
});

