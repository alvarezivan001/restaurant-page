function LoadHome() {
    if(!document.getElementById('main'))
    {
        const main = document.createElement('div');
        main.setAttribute('id','main');
        const content = document.getElementById('content');
        content.appendChild(main);
    }
    else
    {
        const main = document.getElementById('main');
        main.textContent = '';
    }
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
};

export default LoadHome;