import { courses } from './courses.js';

const courseGrid = document.querySelector('#course-grid');
const btnAll = document.querySelector('#all');
const btnWdd = document.querySelector('#wdd');
const btnCse = document.querySelector('#cse');
const count = document.querySelector('#count');
const credits = document.querySelector('#credits');

// Modal
const modal = document.querySelector('#course-details');
const subject = document.querySelector('#course-details h1');
const title = document.querySelector('#course-details h2');
const content = document.querySelector('#course-details p');

function showModal(course) {
    modal.innerHTML = `
    <div>
        <div>
            <h1>${course.subject} ${course.number}</h1>
            <button id="close">❌</button>
        </div>
        <h2>${course.title}</h2>
        <p>${course.credits} credits</p>
        <p>Certificate: ${course.certificate}</p>
        <p>${course.description}</p>
        <p>Technology: ${course.technology.join(', ')}</p>
    </div>
    `
    modal.querySelector('#close').addEventListener('click', () => {
        modal.close()
    });
    modal.showModal();
}

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close()
    }
})

function displayCourses(filteredCourses) {
    courseGrid.innerHTML = "";

    filteredCourses.forEach(course => {
        const courseCard = document.createElement("button");
        courseCard.classList.add("course-card");
        courseCard.innerHTML = `${course.subject} ${course.number}`;

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseGrid.appendChild(courseCard);
        courseCard.addEventListener('click', () => showModal(course))
    });

    count.innerHTML = `<br>The total number of courses listed above is ${filteredCourses.length}`
    credits.innerHTML = `Total credits required: ${filteredCourses.reduce((total, course) => {return total + course.credits}, 0)}`
}

btnAll.addEventListener('click', () => {
    displayCourses(courses);
});

btnWdd.addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject == "WDD")
    displayCourses(wddCourses);
});

btnCse.addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject == "CSE")
    displayCourses(cseCourses);
});

displayCourses(courses);