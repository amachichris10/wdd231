import { courses } from './courses.js';

const courseGrid = document.querySelector('#course-grid');
const btnAll = document.querySelector('#all');
const btnWdd = document.querySelector('#wdd');
const btnCse = document.querySelector('#cse');
const count = document.querySelector('#count');
const credits = document.querySelector('#credits');

function displayCourses(filteredCourses) {
    courseGrid.innerHTML = "";

    filteredCourses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        courseCard.innerHTML = `${course.subject} ${course.number}`;

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseGrid.appendChild(courseCard);
    });

    count.innerHTML = `The total number of courses listed below is ${filteredCourses.length}`
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