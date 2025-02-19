const themeToggle = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');

// Check saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    themeStylesheet.href = savedTheme;
    themeToggle.textContent = savedTheme.includes('dark') ? '🌙' : '☀️';
}

// Toggle Theme
themeToggle.addEventListener('click', () => {
    if (themeStylesheet.href.includes('dark')) {
        themeStylesheet.href = 'light.css';
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'light.css');
    } else {
        themeStylesheet.href = 'dark.css';
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'dark.css');
    }
});
