const modal = document.querySelector('#details');
const levels = document.querySelector('#levels');

const membershipLevels = [
    {
        level: "Non Profit",
        price: 0,
        benefits: [
            "Access to community forums",
            "Monthly newsletter subscription",
            "Standard support"
        ]
    },
    {
        level: "Bronze",
        price: 29,
        benefits: [
            "All Non-Profit benefits",
            "Access to basic resource library",
            "10% discount on workshops",
            "Email support within 48 hours"
        ]
    },
    {
        level: "Silver",
        price: 79,
        benefits: [
            "All Bronze benefits",
            "Full access to advanced resource library",
            "25% discount on workshops",
            "Priority email support",
            "Monthly group Q&A session"
        ]
    },
    {
        level: "Gold",
        price: 199,
        benefits: [
            "All Silver benefits",
            "Free access to all workshops and events",
            "1-on-1 monthly coaching call",
            "24/7 dedicated support",
            "Featured listing in our member directory"
        ]
    }
];

function showModal(item) {
    modal.innerHTML = `
        <div>
            <h2>${item.level} Membership</h2>
            <h3>Benefits:</h3>
            <ul>
                ${item.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
            <h3>Cost: ${item.price === 0 ? 'Free' : `$${item.price} annual` }</h3>
            <button id="close">❌</button>
        </div>
    `;
    modal.querySelector('button').addEventListener('click', () => { modal.close() })
    modal.showModal();
}

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close()
    }
});

function displayCards(list) {
    list.forEach(item => {
        const card = document.createElement('section');
        card.classList.add('information-card');
        card.innerHTML = `
        <h2>${item.level} Membership</h2>
        <button class="main-button">Learn more</button>
        `;
        card.querySelector('button').addEventListener('click', () => showModal(item));
        levels.appendChild(card);
    });
}

displayCards(membershipLevels);

document.addEventListener('DOMContentLoaded', () => {
    const currentTime = new Date().toISOString();
    document.querySelector('#time-stamp').value = currentTime;
})