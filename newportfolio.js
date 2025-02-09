// Typewriter Effect
new Typewriter('#typewriter', {
    strings: ['Web Developer', 'Web Designer', 'Problem Solver'],
    autoStart: true,
    loop: true,
    delay: 75,
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
        if (!email.match(emailPattern)) {
            alert('Please enter a valid email address.');
            return; // Stop the form submission
        }

        alert('Message Sent!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});

// Smooth Scroll
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle the mobile navigation menu
document.querySelector('.navbar-toggle').addEventListener('click', function () {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
});
