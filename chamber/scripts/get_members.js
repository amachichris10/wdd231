const container = document.querySelector('#container');

const displayCards = (list) => {
    list.forEach(item => {
        const card = document.createElement('section');
        const title = document.createElement('h2');
        
        title.innerHTML = item.company_name;
        card.classList.add('card')
        card.appendChild(title);
        
        card.innerHTML += `
        <p>${item.address}</p>
        <p>${item.phone_number}</p>
        <p>${item.website_url}</p>
        <div class="card-image-wrapper">
            <img
                src="./images/${item.image_file_name}" 
                alt="${item.company_name} logo" 
                width="300" 
                height="200" 
                loading="lazy">
        </div>
        `;
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