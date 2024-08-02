document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const courseList = document.getElementById('course-list');
    const detailsContent = document.getElementById('details-content');

    const courses = [
        {
            title: 'Diploma in IT (DIT)',
            code: 'DIT101',
            duration: '2 Years',
            description: 'An intermediate course for IT professionals.',
            modules: [
                { name: 'Software Engineering', lecturer: 'Alice Brown', venue: 'Room 201', video: 'https://www.youtube.com/embed/example3', guide: 'path/to/study-guide3.pdf' },
                { name: 'Database Systems', lecturer: 'Bob White', venue: 'Room 202', video: 'https://www.youtube.com/embed/example4', guide: 'path/to/study-guide4.pdf' }
            ]
        },
        {
            title: 'Bachelor\'s in IT (BIT)',
            code: 'BIT201',
            duration: '3 Years',
            description: 'A comprehensive course for advanced IT studies.',
            modules: [
                { name: 'Advanced Programming', lecturer: 'Carol Black', venue: 'Room 301', video: 'https://www.youtube.com/embed/example5', guide: 'path/to/study-guide5.pdf' },
                { name: 'Network Security', lecturer: 'Dave Green', venue: 'Room 302', video: 'https://www.youtube.com/embed/example6', guide: 'path/to/study-guide6.pdf' }
            ]
        },
        {
            title: 'Bachelor of Commerce (BCOM)',
            code: 'BCOM301',
            duration: '3 Years',
            description: 'A broad course covering business and commerce subjects.',
            modules: [
                { name: 'Financial Accounting', lecturer: 'Eve Red', venue: 'Room 401', video: 'https://www.youtube.com/embed/example7', guide: 'path/to/study-guide7.pdf' },
                { name: 'Marketing Management', lecturer: 'Frank Blue', venue: 'Room 402', video: 'https://www.youtube.com/embed/example8', guide: 'path/to/study-guide8.pdf' }
            ]
        }
    ];

    searchButton.addEventListener('click', () => {
        const query = searchBar.value.toLowerCase();
        courseList.innerHTML = '';
        const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(query));
        filteredCourses.forEach(course => {
            const courseArticle = document.createElement('article');
            courseArticle.innerHTML = `
                <h3>${course.title}</h3>
                <p><strong>Course Code:</strong> ${course.code}</p>
                <p><strong>Duration:</strong> ${course.duration}</p>
                <p>${course.description}</p>
            `;
            courseArticle.addEventListener('click', () => displayCourseDetails(course));
            courseList.appendChild(courseArticle);
        });
    });
    
    function displayCourseDetails(course) {
        const courseDetails = document.getElementById('course-details');
        courseDetails.style.display = 'block'; // Show the course details section
        const detailsContent = document.getElementById('details-content');
        detailsContent.innerHTML = `
            <h3>${course.title}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Module</th>
                        <th>Lecturer</th>
                        <th>Venue</th>
                        <th>Resources</th>
                    </tr>
                </thead>
                <tbody>
                    ${course.modules.map(module => `
                        <tr>
                            <td>${module.name}</td>
                            <td>${module.lecturer}</td>
                            <td>${module.venue}</td>
                            <td>
                                <a href="${module.guide}" download>Download Guide</a>
                                <br>
                                <a href="${module.video}" target="_blank">Watch Video</a>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }
});
