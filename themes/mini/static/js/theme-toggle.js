// static/js/theme-toggle.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Function to update theme-color meta tag
    function updateThemeColorMeta() {
        const isDark = document.documentElement.classList.contains('dark-theme');
        const metaThemeColor = document.getElementById('theme-color-meta');

        if (metaThemeColor) {
            if (isDark) {
                metaThemeColor.setAttribute('content', '#1e1e2e'); // Dark theme background color
            } else {
                metaThemeColor.setAttribute('content', '#ffffff'); // Light theme background color
            }
        }
    }

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

        // Update theme-color meta tag
        updateThemeColorMeta();

        // Update syntax highlighting theme if the function exists
        if (typeof setSyntaxTheme === 'function') {
            setSyntaxTheme();
        }
    }

    // Add click event listener to theme toggle button
    themeToggle.addEventListener('click', toggleTheme);

    // Update theme-color meta tag when the page loads
    updateThemeColorMeta();
});
