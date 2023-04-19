alert("careful out there!");

const content = document.getElementById('content');

const header = document.createElement('div');
header.setAttribute('id','header');
    const home = document.createElement('div');
        home.setAttribute('id','home');
        home.textContent = 'Home';
    const menu = document.createElement('div');
        menu.setAttribute('id','menu');
        menu.textContent = 'Menu';
    const contact = document.createElement('div');
        contact.setAttribute('id','contact');
        contact.textContent = 'Contact';

header.appendChild(home);
header.appendChild(menu);
header.appendChild(contact);

content.appendChild(header);

const main = document.createElement('div');
main.setAttribute('id','main');
    const headline = document.createElement('div');
        headline.setAttribute('class','info');
        headline.setAttribute('id', 'headline');
    const summary = document.createElement('div');
        summary.setAttribute('class','info');
        summary.setAttribute('id', 'summary');
    const hours = document.createElement('div');
        hours.setAttribute('class','info');
        hours.setAttribute('id', 'hours');
    const location = document.createElement('div');
        location.setAttribute('class','info');
        location.setAttribute('id', 'hours');
    
    headline.textContent = "Lulu California Bistro";
    summary.textContent = "A wide variety of delectable apps, entrees, and desserts";
    hours.textContent = "Sun-Thurs: 11am-9pm Fri & Sat: 9am-10pm";
    location.textContent = "Palm Canyon Drive, Palm Springs, CA";

main.appendChild(headline);
main.appendChild(summary);
main.appendChild(hours);
main.appendChild(location);

content.appendChild(main);

const footer = document.createElement('div');
footer.setAttribute('id','footer');
footer.textContent = "@alvarezivan001, per TheOdinProject";

content.appendChild(footer);