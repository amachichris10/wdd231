const container = document.querySelector('#container');

const displayCards = (list) => {
    list.forEach(item => {
        const card = document.createElement('section');
        const title = document.createElement('h2');
        const image = document.createElement('img');
        
        title.innerHTML = item.company_name;
        image.setAttribute('alt', item.company_name);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '200px');
        image.setAttribute('height', '100px');
        image.setAttribute('src', `./images/${item.image_file_name}`);
        
        
        card.classList.add('card')
        card.appendChild(title);
        
        card.innerHTML += `
        <p>${item.address}</p>
        <p>${item.phone_number}</p>
        <p>${item.website_url}</p>
        `;

        card.appendChild(image);
        container.appendChild(card);
    });
}

async function getMembersData() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        displayCards(data);

    } catch (error) {
        console.error('Failed to load business directory:', error);
        container.innerHTML = `<p class="error-message">Sorry, we couldn't load the directory right now.</p>`;
    }

}

getMembersData();