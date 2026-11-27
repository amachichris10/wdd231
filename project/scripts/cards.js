export const displayCards = (list, container) => {
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
        container.appendChild(card);
    });
}