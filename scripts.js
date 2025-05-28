function toggleDarkMode() {
    document.body.classList.toggle("dark");
    // Guardar estado en localStorage
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
}
document.addEventListener("DOMContentLoaded", () => {
    // Leer preferencia guardada
    const darkMode = localStorage.getItem("darkMode") === "true";
    if (darkMode) {
        document.body.classList.add("dark");
    }
});
