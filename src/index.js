import LoadPage from "./page-load.js";
import LoadContact from "./contact.js";
import LoadMenu from "./menu.js";

(() => {

    LoadPage();
    buttons();
})();

function buttons () {
    const contact_button = document.getElementById('contact');
    contact_button.addEventListener('click', alert("hello"));
};