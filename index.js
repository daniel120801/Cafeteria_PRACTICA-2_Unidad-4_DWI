
// ---------- FUNCIÓN DE TRADUCCIÓN (data-es / data-en) ----------
function setLanguage(lang) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-es]');
    elements.forEach(el => {
        // Guardar el HTML original en data-original si no existe
        if (!el.dataset.original) {
            el.dataset.original = el.innerHTML;
        }
        if (lang === 'en' && el.dataset.en) {
            el.innerHTML = el.dataset.en;
        } else {
            el.innerHTML = el.dataset.es || el.dataset.original;
        }
    });
    // Actualizar botones y enlaces
    const langToggle = document.getElementById('langToggle');
    const langFooter = document.getElementById('langFooter');
    if (lang === 'en') {
        langToggle.innerHTML = '<i class="fas fa-globe"></i> ES/EN';
        if (langFooter) langFooter.textContent = 'English / Español';
    } else {
        langToggle.innerHTML = '<i class="fas fa-globe"></i> EN/ES';
        if (langFooter) langFooter.textContent = 'Español / English';
    }
    // Guardar preferencia
    localStorage.setItem('preferredLang', lang);
}

// Cargar idioma guardado o español por defecto
const savedLang = localStorage.getItem('preferredLang') || 'es';
setLanguage(savedLang);

// Evento para cambiar idioma
document.getElementById('langToggle').addEventListener('click', () => {
    const currentLang = document.documentElement.lang || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
});

// También en el footer
document.getElementById('langFooter').addEventListener('click', (e) => {
    e.preventDefault();
    const currentLang = document.documentElement.lang || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
});

// ---------- MODO OSCURO ----------
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Guardar preferencia
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
});

// Cargar modo oscuro guardado
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled') {
    document.body.classList.add('dark');
}

// Nota: Las imágenes actuales son placeholders SVG. Reemplaza con fotografías originales.
