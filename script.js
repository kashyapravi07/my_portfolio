// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Typing Animation
const typingText = "AI & Cloud Intern | Hackathon Lead | Machine Learning Enthusiast";
let i = 0;
const typingElement = document.getElementById('typing');

function typeWriter() {
    if (i < typingText.length) {
        typingElement.innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);
