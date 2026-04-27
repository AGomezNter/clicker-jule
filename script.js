// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Initialize state
let count = parseInt(getCookie('cookieCount')) || 0;
const counterElement = document.getElementById('counter');
const cookieElement = document.getElementById('cookie');
const particlesContainer = document.getElementById('particles');

// Update UI on load
counterElement.textContent = count;

cookieElement.addEventListener('click', (e) => {
    count++;
    counterElement.textContent = count;
    
    // Persist the new count in a cookie (lasts 30 days)
    setCookie('cookieCount', count, 30);
    
    // Counter pop animation
    counterElement.style.transform = 'scale(1.15)';
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
    }, 100);

    // Create a +1 particle at click position
    const x = e.clientX !== 0 ? e.clientX : window.innerWidth / 2;
    const y = e.clientY !== 0 ? e.clientY : window.innerHeight / 2;
    
    createParticle(x, y);
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.textContent = '+1';
    particle.classList.add('particle');
    
    const offsetX = (Math.random() - 0.5) * 80;
    const offsetY = (Math.random() - 0.5) * 80 - 40;
    
    particle.style.left = `${x + offsetX}px`;
    particle.style.top = `${y + offsetY}px`;
    
    particlesContainer.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 1000);
}
