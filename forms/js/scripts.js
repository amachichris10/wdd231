const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
    <p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
    <p>${myInfo.get('ordinance')} on ${myInfo.get('date')}</p>
    <p>${myInfo.get('location')} Temple</p>
    <p>Your phone: ${myInfo.get('phone')}</p>
    <p>Your email is ${myInfo.get('email')}</p>
`;