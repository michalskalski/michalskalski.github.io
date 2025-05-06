// static/js/theme-toggle.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Toggle theme function
    function toggleTheme() {
        if (document.documentElement.classList.contains('light-theme')) {
            // Switch to dark theme
            document.documentElement.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light theme
            document.documentElement.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light');
        }

        // Update syntax highlighting theme if the function exists
        if (typeof setSyntaxTheme === 'function') {
            setSyntaxTheme();
        }
    }

    // Add click event listener to theme toggle button
    themeToggle.addEventListener('click', toggleTheme);
});
