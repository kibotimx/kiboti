window.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    const logo = document.getElementById('preloader-logo');

    // Wait for the fadeInOut animation to finish (2.5s), then hide preloader
    setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => {
            preloader.style.display = 'none';
            mainContent.style.display = 'block';
        }, 1000); // match transition duration
    }, 2500);
});
