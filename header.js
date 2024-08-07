// header.js
function loadHeader() {
    const headerHTML = `
    <header>
        <!-- Header section containing logo, contact information, and social media icons -->
        <div class="logo-social">
            <!-- Logo -->
            <div class="logo">
                <h1>BELGIUM CAMPUS ITVERSITY</h1>
                <p>It's The Way We're Wired</p>
            </div>
            <!-- Contact information with operating hours and phone number -->
            <div class="contact-info">
                <div class="time-phone">
                    <i class="fas fa-clock"></i> <!-- Clock icon -->
                    <div class="time-details">
                        <span>Monday - Friday</span>
                        <span>08:00-17:00</span>
                    </div>
                </div>
                <div class="time-phone">
                    <i class="fas fa-phone"></i> <!-- Phone icon -->
                    <div class="phone-details">
                        <span>Contact Us</span>
                        <span>010 536 8593</span>
                    </div>
                </div>
            </div>
            <!-- Social media icons with links -->
            <div class="social-icons">
                <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://yourwebsite.com" target="_blank"><i class="fas fa-globe"></i></a>
            </div>
        </div>
        <!-- Navigation menu with links to different sections of the page -->
        <nav>
            <ul class="menu">
                <li><a href="app.html">Home</a></li>
                <li><a href="Course.html">Qualifications</a></li>
                <li><a href="about.html">About Us</a></li>
            </ul>
        </nav>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}