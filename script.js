document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    // Toggle the 'show' class when the menu icon is clicked
    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event propagation
        navLinks.classList.toggle('show');
    });

    // Close the menu when clicking anywhere outside
    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            navLinks.classList.remove('show');
        }
    });
});
