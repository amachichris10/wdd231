const data = new URLSearchParams(window.location.search);
const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true 
}
const timeStamp = data.get('current-time-stamp');
const dateObject = new Date(timeStamp);

document.querySelector('#form-information').innerHTML = `
    <p>Your form was submitted successfully</p>
    <p>${data.get('first')} ${data.get('last')}</p>
    <p>${data.get('email')}</p>
    <p>${data.get('phone')}</p>
    <p>${data.get('business-name')}</p>
    <p>${dateObject.toLocaleDateString('en-US', options)}</p>
`;