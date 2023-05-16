import LoadPage from "./page-load";
import LoadContact from "./contact";
import LoadMenu from "./menu";

// (() => {
   
//     buttons();
// })();

// function buttons () {
//     const contact_button = document.getElementById('contact');
//     contact_button.addEventListener('click', alert("hello"));
// };

LoadPage();

const contact = document.getElementById('contact');
const menu = document.getElementById('menu');
const home = document.getElementById('home')

contact.addEventListener('click', LoadContact);
menu.addEventListener('click', LoadMenu);
home.addEventListener('click', LoadPage);
