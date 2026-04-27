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
});
