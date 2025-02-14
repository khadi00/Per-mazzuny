document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('h1');
    const message = document.getElementById('message');

    heading.addEventListener('click', () => {
        heading.classList.add('hidden');
        message.classList.remove('hidden');
    });
});
