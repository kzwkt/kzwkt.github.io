// Function to apply dark mode based on saved preference
function applyDarkMode() {
    const darkMode = localStorage.getItem('dark-mode') === 'true';
    document.body.classList.toggle('dark-mode', darkMode);
}

// Event listener to toggle dark mode and save preference
document.querySelector('.theme-toggle').addEventListener('click', () => {
    const darkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', darkMode);
});

// Apply dark mode when the document is loaded
document.addEventListener('DOMContentLoaded', applyDarkMode);
