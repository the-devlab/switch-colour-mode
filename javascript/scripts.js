const themeStyle = document.querySelector('#theme-style');
const modeText = document.querySelector('#modeText');
const darkMode = document.querySelector('#dark-mode');
const lightMode = document.querySelector('#light-mode');

let theme = localStorage.getItem('theme');

if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}

let modeLinks = document.getElementsByClassName('mode-link');

for (var i = 0; modeLinks.length > i; i++) {
  modeLinks[i].addEventListener('click', function () {
    // data-mode attribute in index.html
    let mode = this.dataset.mode;
    console.log('Mode: ', mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == 'dark') {
    themeStyle.href = 'styles/dark.css';
    modeText.innerHTML = 'Dark Mode';
    darkMode.style = 'display: none;';
    lightMode.style = 'display: inline-block;';
  } else {
    themeStyle.href = 'styles/light.css';
    modeText.innerHTML = 'Light Mode';
    lightMode.style = 'display: none;';
    darkMode.style = 'display: inline-block;';
  }

  // save to local storage {Chrome dev tools -> application}
  localStorage.setItem('theme', mode);
}
