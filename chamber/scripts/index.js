const spotlights = document.querySelector('#spotlights');

const displayCards = (list) => {
    list.forEach(item => {
        const card = document.createElement('section');

        card.innerHTML += `
        <h2>${item.company_name}</h2>
        <p>${item.address}</p>
        <p>${item.phone_number}</p>
        <p>${item.website_url}</p>
        <p>${item.membership_level}</p>
        <img
            src="./images/${item.image_file_name}" 
            alt="${item.company_name}" 
            width="200" 
            height="200" 
            loading="lazy">
        `;
        spotlights.appendChild(card);
    });
}

async function getMembersData() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        const filteredList = data.filter(element => element.membership_level == "Gold" || element.membership_level == "Silver")

        const randomSpotlights = [...filteredList]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        
        displayCards(randomSpotlights);

    } catch (error) {
        console.error('Failed to load business directory:', error);
        container.innerHTML = `<p class="error-message">Sorry, we couldn't load the directory right now.</p>`;
    }

}

getMembersData();