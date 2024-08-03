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
                <p><strong>Course Code:</strong> ${course.code}</p>
                <p><strong>Duration:</strong> ${course.duration}</p>
                <p>${course.description}</p>
            `;
            // Add click event to display course details
            courseArticle.addEventListener('click', () => displayCourseDetails(course));
            courseList.appendChild(courseArticle); // Add the article to the course list
        });
    });
    
    // Function to display course details
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
                                <a href="${module.guide}" download>Download Study Guide</a>
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
