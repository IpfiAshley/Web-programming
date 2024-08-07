document.addEventListener('DOMContentLoaded', () => {
    // Get references to HTML elements
    const searchBar = document.getElementById('search-bar'); // Search input field
    const searchButton = document.getElementById('search-button'); // Search button
    const courseList = document.getElementById('course-list'); // Container for the list of courses
    const detailsContent = document.getElementById('details-content'); // Container for course details

    // Array of course objects
    const courses = [
        {
            title: 'Diploma in Information Technology (DIT)',
            code: 'DIT101',
            duration: '2 Years',
            description: 'An intermediate course for IT professionals.',
            modules: [
                { name: 'Software Engineering 261', lecturer: 'Ayanda Ndlovu', venue: 'Ubuntu Lecture Theatre', video: 'https://youtu.be/iIxZrYzJJ7I?si=ZCBowXTMLj_1tBOu', guide: 'https://www.belgiumcampus.ac.za/wp-content/uploads/2022/07/Software-Engineering-371-SEN371.pdf' },
                { name: 'Database Systems 261', lecturer: 'Zanele Mbatha', venue: 'Charles Babbage Hall', video: 'https://youtu.be/iIxZrYzJJ7I?si=ZCBowXTMLj_1tBOu', guide: 'https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/Enterprise-Systems-261-ERP261.pdf' }
            ]
        },
        {
            title: 'Bachelor of Information Technology (BIT)',
            code: 'BIT201',
            duration: '3 Years',
            description: 'An advanced course in Software Engineering/Data Analytics.',
            modules: [
                { name: 'Software Engineering 371', lecturer: 'Lerato Molefe', venue: 'Ada Lovelace Hall', video: 'https://youtu.be/iIxZrYzJJ7I?si=ZCBowXTMLj_1tBOu', guide: 'https://www.belgiumcampus.ac.za/wp-content/uploads/2022/07/Software-Engineering-371-SEN371.pdf' },
                { name: 'Data Analytics 371', lecturer: 'Kabelo Dlamini', venue: 'Grace Hopper Theatre', video: 'https://youtu.be/iIxZrYzJJ7I?si=ZCBowXTMLj_1tBOu', guide: 'https://www.belgiumcampus.ac.za/wp-content/uploads/2022/07/Data-Analytics-371-DAL371.pdf' }
            ]
        },
        {
            title: 'Bachelor of Computing (BCOM)',
            code: 'BCOM301',
            duration: '3 Years',
            description: 'An advanced course in Computer Science/Data Science.',
            modules: [
                { name: 'Software Engineering 381', lecturer: 'Sipho Mthembu', venue: 'Alan Turing Auditorium', video: 'https://youtu.be/iIxZrYzJJ7I?si=ZCBowXTMLj_1tBOu', guide: 'https://www.belgiumcampus.ac.za/wp-content/uploads/2023/11/Software-Engineering-381-SEN381.pdf' },
                { name: 'Data Science 381', lecturer: 'Thandiwe Khumalo', venue: 'Leibniz Hall', video: 'https://youtu.be/iIxZrYzJJ7I?si=ZCBowXTMLj_1tBOu', guide: 'https://www.belgiumcampus.ac.za/wp-content/uploads/2022/07/Data-Science-381-DTS381.pdf' }
            ]
        }
    ];

    // Event listener for search button click
    searchButton.addEventListener('click', () => {
        const query = searchBar.value.toLowerCase(); // Get the search query and convert to lowercase
        courseList.innerHTML = ''; // Clear the previous search results
        // Filter courses based on the search query
        const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(query));
        // Create and display a list of filtered courses
        filteredCourses.forEach(course => {
            const courseArticle = document.createElement('article');
            courseArticle.innerHTML = `
                <h3>${course.title}</h3>
                <button onclick="viewCourse('${course.code}')">View Course</button>
            `;
            courseList.appendChild(courseArticle);
        });
    });
    
    // Function to display course details
    // Function to view course details
    window.viewCourse = function (courseCode) {
        const course = courses.find(course => course.code === courseCode); // Find the course by its code
        if (course) {
            detailsContent.innerHTML = `
                <h3>${course.title}</h3>
                <p>Duration: ${course.duration}</p>
                <p>${course.description}</p>
                <ul>
                    ${course.modules.map(module => `
                        <li>
                            ${module.name} - ${module.lecturer} - ${module.venue}
                            <br><a href="${module.video}" target="_blank">Watch Lecture</a> | <a href="${module.guide}" target="_blank">Study Guide</a>
                            <button onclick="markAsCompleted('${module.name}')">Mark as Completed</button>
                        </li>
                    `).join('')}
                </ul>
                <button class="enroll-button" onclick="enroll('${course.code}')">Enroll</button>
                <button class="back-button" onclick="goBack()">Back to Courses</button>
                <button id="print-course-button" onclick="printCourse()">Print Course</button>
                <h3>Completed Modules</h3>
                <ul id="completed-modules-list"></ul>
            `;
            document.getElementById('course-details').style.display = 'block';
        }
    };

        // Function to go back to the list of courses
        window.goBack = function () {
            courseList.innerHTML = '';
            searchBar.value = '';
            detailsContent.innerHTML = '';
            document.getElementById('course-details').style.display = 'none';
        };

    // Function to redirect to enroll page with course code as query parameter
    window.enroll = function(courseCode) {
        window.location.href = `enroll.html?courseCode=${courseCode}`;
    };

// Function to mark a module as completed
window.markAsCompleted = function (moduleName) {
    const completedModules = document.getElementById('completed-modules-list');
    const completedItem = document.createElement('li');
    completedItem.textContent = moduleName;
    completedModules.appendChild(completedItem);
};

// Function to print the course details
window.printCourse = function () {
    window.print();
};
});