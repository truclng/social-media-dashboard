// Setting light and dark mode
// Colour mode also stored in local storage for setting up purposes
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
    localStorage.setItem('colorMode', 'dark');
}

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
    localStorage.setItem('colorMode', 'light');
}

const getModeFromStorage = () => {
    return localStorage.getItem('colorMode');
}

const getModeFromSystemPref = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light'
}

// Update colour mode as per storage or system preference
// Upon initial load, we will be using system preference to display the page
const updateColor = () => {
    const mode = getModeFromStorage() || getModeFromSystemPref();
    mode == 'dark' ? darkButton.click() : lightButton.click();
}

// Change colour mode as per selected button - allow users to switch between light and dark
// mode using the toggle
const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach(button => {
    button.addEventListener('click', e => {
        darkButton.checked ? setDarkMode() : setLightMode();
    });
});

// Update and display colour mode for page
updateColor();