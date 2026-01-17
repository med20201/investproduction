/**
 * INVEST PRODUCTION S.A.R.L
 * Système de gestion multilingue (FR / EN / AR)
 */

// Configuration des langues disponibles
const languages = {
  fr: {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    dir: 'ltr'
  },
  en: {
    code: 'en',
    name: 'English',
    flag: '🇬🇧',
    dir: 'ltr'
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    flag: '🇲🇦',
    dir: 'rtl'
  }
};

// Détection de la langue actuelle depuis l'URL
function getCurrentLanguage() {
  const path = window.location.pathname;
  
  if (path.includes('/ar/')) return 'ar';
  if (path.includes('/en/')) return 'en';
  return 'fr'; // Défaut : français (racine)
}

// Génération du sélecteur de langue HTML
function createLanguageSelector() {
  const currentLang = getCurrentLanguage();
  const currentLangData = languages[currentLang];
  
  return `
    <div class="language-selector">
      <button class="lang-btn" id="langButton" aria-label="Changer de langue">
        <span class="lang-flag">${currentLangData.flag}</span>
        <span class="lang-name">${currentLangData.name}</span>
        <span class="lang-arrow">▼</span>
      </button>
      <div class="lang-dropdown" id="langDropdown">
        ${Object.values(languages).map(lang => `
          <a href="${getLanguageUrl(lang.code)}" class="lang-option ${lang.code === currentLang ? 'active' : ''}" data-lang="${lang.code}">
            <span class="lang-flag">${lang.flag}</span>
            <span class="lang-name">${lang.name}</span>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

// Génération de l'URL pour une langue donnée
function getLanguageUrl(targetLang) {
  const path = window.location.pathname;
  const currentLang = getCurrentLanguage();
  
  // Récupération du nom de la page (ex: index.html, services.html)
  let pageName = path.split('/').pop() || 'index.html';
  if (!pageName.includes('.html')) pageName = 'index.html';
  
  // Détection si on est en local (file://) ou sur serveur
  const isLocal = window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '';
  
  // Construction de la nouvelle URL
  if (targetLang === 'fr') {
    // Français : racine
    if (currentLang !== 'fr') {
      // Depuis ar/ ou en/ → remonter au parent
      return `../${pageName}`;
    }
    // Déjà en français
    return pageName;
  } else if (targetLang === currentLang) {
    // Déjà dans la langue cible
    return pageName;
  } else if (currentLang === 'fr') {
    // Depuis français → vers en/ ou ar/
    return `${targetLang}/${pageName}`;
  } else {
    // Depuis en/ ou ar/ → vers une autre langue (en/ ou ar/)
    return `../${targetLang}/${pageName}`;
  }
}

// Application de la direction RTL/LTR
function applyDirection() {
  const currentLang = getCurrentLanguage();
  const dir = languages[currentLang].dir;
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', currentLang);
}

// Initialisation du sélecteur de langue
function initLanguageSelector() {
  // Application de la direction
  applyDirection();
  
  // Insertion du sélecteur dans le header (après le nav)
  const header = document.querySelector('.header-container');
  if (!header) return;
  
  // Création d'un conteneur pour le sélecteur
  const langContainer = document.createElement('div');
  langContainer.innerHTML = createLanguageSelector();
  langContainer.style.cssText = 'margin-left: auto;';
  
  // Insertion après le nav (à la fin du header)
  header.appendChild(langContainer.firstElementChild);
  
  // Gestion du dropdown
  const langButton = document.getElementById('langButton');
  const langDropdown = document.getElementById('langDropdown');
  
  if (langButton && langDropdown) {
    langButton.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });
    
    // Fermeture au clic extérieur
    document.addEventListener('click', () => {
      langDropdown.classList.remove('active');
    });
  }
}

// Exécution au chargement du DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguageSelector);
} else {
  initLanguageSelector();
}
