fetch('people1.json')
    .then(response => response.json())
    .then(people => {
        console.log(people);
        const container = document.createElement('div');
        container.classList.add('container');

        people.forEach(person => {
            const personInfo = document.createElement('div');
            personInfo.classList.add('person-info');

            const nameSpan = document.createElement('h3');
            nameSpan.textContent = person.name;

            // Creating an image element
            const img = document.createElement('img');
            img.src = person.picture; // Assuming 'picture' is the key in your JSON containing the URL of the photo
            img.alt = person.name;

            const emailSpan = document.createElement('span');
            emailSpan.textContent = person.email;

            const countrySpan = document.createElement('span');
            countrySpan.textContent = person.country;

            personInfo.appendChild(nameSpan);
            personInfo.appendChild(img);
            personInfo.appendChild(emailSpan);
            personInfo.appendChild(countrySpan);
            container.appendChild(personInfo);
        });
        const personsDiv = document.querySelector('.persons');
        personsDiv.appendChild(container);
    });


