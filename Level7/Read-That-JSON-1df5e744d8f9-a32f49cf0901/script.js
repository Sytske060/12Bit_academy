fetch('people.json')
    .then(response => response.json())
    .then(people => {
        console.log(people);

        const container = document.createElement('div');
        container.classList.add('container'); // Toevoegen van de 'container' klasse aan het div-element

        const title = document.createElement('h2');
        title.textContent = 'Who is that person?';
        document.body.appendChild(title);

        const titles = document.createElement('h4');
        titles.textContent = 'Name Hobby Job';
        container.appendChild(titles);


        people.forEach(person => {
            const personInfo = document.createElement('p');
            personInfo.classList.add('person-info'); // Toevoegen van de 'person-info' class aan het paragraaf element

            const nameSpan = document.createElement('span');
            nameSpan.classList.add('name'); // Voegt class toe //
            nameSpan.textContent = person.name;

            const hobbySpan = document.createElement('span');
            hobbySpan.textContent = person.hobby;

            const jobSpan = document.createElement('span');
            jobSpan.textContent = person.job;

            personInfo.appendChild(nameSpan);
            personInfo.appendChild(hobbySpan);
            personInfo.appendChild(jobSpan);
            container.appendChild(personInfo);
        });
        document.body.appendChild(container);
    });