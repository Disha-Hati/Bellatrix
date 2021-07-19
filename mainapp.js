//Dark Theme
const htmlEl = document.getElementsByTagName('html')[0];

const toggleTheme = (theme) => {
    htmlEl.dataset.theme = theme;
}

// Copy to clipboard
const copyText=document.querySelector("#snippet");
