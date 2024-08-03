document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const courseList = document.getElementById('course-list');
    const detailsContent = document.getElementById('details-content');

    const courses = [
        {
            title: 'Diploma in Information Technology (DIT)',
            code: 'DIT101',
            duration: '2 Years',
            description: 'An intermediate course for IT professionals.',
            modules: [
                { name: 'Software Engineering 261', lecturer: 'Ayanda Ndlovu', venue: 'Ubuntu Lecture Theatre', video: 'https://www.youtube.com/embed/example3', guide: 'path/to/study-guide3.pdf' },
                { name: 'Database Systems 261', lecturer: 'Zanele Mbatha', venue: 'Charles Babbage Hall', video: 'https://www.youtube.com/embed/example4', guide: 'path/to/study-guide4.pdf' }
            ]
        },
        {
            title: 'Bachelor of Information Technology (BIT)',
            code: 'BIT201',
            duration: '3 Years',
            description: 'A advanced course in Software Engineering/Data Analytics.',
            modules: [
                { name: 'Software Engineering 371', lecturer: 'Lerato Molefe', venue: 'Ada Lovelace Hall', video: 'https://www.youtube.com/embed/example5', guide: 'path/to/study-guide5.pdf' },
                { name: 'Data Analytics 371', lecturer: 'Kabelo Dlamini', venue: 'Grace Hopper Theatre', video: 'https://www.youtube.com/embed/example6', guide: 'path/to/study-guide6.pdf' }
            ]
        },
        {
            title: 'Bachelor of Computing (BCOM)',
            code: 'BCOM301',
            duration: '3 Years',
            description: 'A advanced course in Computer Science/Data Science.',
            modules: [
                { name: 'Software Engineering 381', lecturer: 'Sipho Mthembu', venue: 'Alan Turing Auditorium', video: 'https://www.youtube.com/embed/example7', guide: 'path/to/study-guide7.pdf' },
                { name: 'Data Science 381', lecturer: 'Thandiwe Khumalo', venue: 'Leibniz Hall', video: 'https://www.youtube.com/embed/example8', guide: 'path/to/study-guide8.pdf' }
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
