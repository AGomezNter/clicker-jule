function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
    return null;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

document.addEventListener('DOMContentLoaded', () => {
    let count = parseInt(getCookie('clicks')) || 0;
    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('counter');

    counter.textContent = `Clicks: ${count}`;

    cookie.addEventListener('click', () => {
        count++;
        counter.textContent = `Clicks: ${count}`;
        setCookie('clicks', count, 7);
    });

    // Client-side protection as requested
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    document.addEventListener('keydown', (e) => {
        // Block F12
        if (e.key === 'F12') {
            e.preventDefault();
        }
        // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
            e.preventDefault();
        }
        // Block Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
        }
    });
});
