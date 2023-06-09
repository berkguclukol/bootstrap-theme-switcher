const root = document.documentElement;
const buttons = document.querySelectorAll(".theme-changer-btn");
const themeCookieName = "app-theme";
const darkIcon = root.dataset.darkValue || "dark mode";
const lightIcon = root.dataset.lightValue || "light mode";

const setTheme = (theme) => {
    root.setAttribute("data-bs-theme", theme);
    localStorage.setItem(themeCookieName, theme);
    buttons.forEach((button) => {
        let dIcon = button.dataset.darkValue || darkIcon;
        let lIcon = button.dataset.lightValue || lightIcon;
        button.innerHTML = theme === "dark" ? lIcon : dIcon;
    });
};

const currentTheme = localStorage.getItem(themeCookieName);
if (!currentTheme) {
    setTheme("light");
} else {
    setTheme(currentTheme);
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        setTheme(root.getAttribute("data-bs-theme") === "light" ? "dark" : "light");
    });
});
