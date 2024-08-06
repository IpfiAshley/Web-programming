document.addEventListener('DOMContentLoaded', () => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const courseCode = params.get('courseCode');

    // Set course code in form
    document.getElementById('course-code').value = courseCode;

    // Handle form submission
    document.getElementById('enroll-form').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        // Input validation (client-side)
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        if (name === '' || email === '') {
            alert('Please fill in all required fields.');
            return;
        }

        // Show countdown timer
        showCountdown(courseCode);

        // Display a confirmation message
        alert(`Thank you for enrolling, ${name}! You will receive an email confirmation at ${email}.`);
    });

    function showCountdown(courseCode) {
        const countdownDiv = document.getElementById('countdown');
        let startDate;

        switch (courseCode) {
            case 'DIT101':
                startDate = new Date('2024-10-01T00:00:00');
                break;
            case 'BIT201':
                startDate = new Date('2024-11-01T00:00:00');
                break;
            case 'BCOM301':
                startDate = new Date('2024-12-01T00:00:00');
                break;
            default:
                startDate = new Date();
        }

        const updateCountdown = () => {
            const now = new Date();
            const timeLeft = startDate - now;

            if (timeLeft <= 0) {
                countdownDiv.innerHTML = 'The course has started!';
                clearInterval(intervalId);
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownDiv.innerHTML = `Time until course starts: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        };

        updateCountdown();
        const intervalId = setInterval(updateCountdown, 1000);
    }
    // Define the goBack function to navigate back to the course list
    window.goBack = function() {
        window.location.href = 'app.html'; // Replace 'index.html' with your course list page
    };
});
