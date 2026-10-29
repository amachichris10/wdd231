const year = document.querySelector('#current-year');
const today = new Date();
const lastModified = document.querySelector('#last-modified')

year.innerHTML = `&copy; ${today.getFullYear()}`;
lastModified.innerHTML = `Last Modified: ${document.lastModified}`