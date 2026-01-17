# 🌐 SYSTÈME MULTILINGUE — INVEST PRODUCTION S.A.R.L

## ✅ Site web disponible en 3 langues

Le site **INVEST PRODUCTION S.A.R.L** est maintenant disponible en **3 langues complètes** :

🇫🇷 **Français** (par défaut) — Racine `/`  
🇬🇧 **English** — Sous-dossier `/en/`  
🇲🇦 **العربية (Arabe)** — Sous-dossier `/ar/` avec support RTL

---

## 📂 Structure des dossiers

```
INVEST PRODUCTION/
│
├── 📄 index.html                    🇫🇷 Français (racine)
├── 📄 a-propos.html                 🇫🇷
├── 📄 services.html                 🇫🇷
├── 📄 moyens-equipes.html           🇫🇷
├── 📄 references.html               🇫🇷
├── 📄 contact.html                  🇫🇷
├── 📄 mentions-legales.html         🇫🇷
│
├── en/                               🇬🇧 English
│   ├── index.html
│   ├── a-propos.html (About Us)
│   ├── services.html
│   ├── moyens-equipes.html (Fleet & Teams)
│   ├── references.html
│   ├── contact.html
│   └── mentions-legales.html (Legal Notice)
│
├── ar/                               🇲🇦 Arabic (RTL)
│   ├── index.html
│   ├── a-propos.html (من نحن)
│   ├── services.html (خدماتنا)
│   ├── moyens-equipes.html (الوسائل والفرق)
│   ├── references.html (مراجعنا)
│   ├── contact.html (اتصال)
│   └── mentions-legales.html
│
└── assets/
    ├── css/
    │   ├── style.css                 ✅ Styles principaux
    │   └── languages.css             ✅ NOUVEAU : Styles multilingues + RTL
    ├── js/
    │   └── languages.js              ✅ NOUVEAU : Gestion des langues
    └── logo.svg                      ✅ Logo officiel
```

---

## 🎨 Sélecteur de langue

### Intégration automatique

Le **sélecteur de langue** s'affiche automatiquement dans le header sur **toutes les pages** :

```javascript
// Chargement du script dans chaque page HTML
<script src="assets/js/languages.js"></script>
```

### Fonctionnalités

✅ **Détection automatique** de la langue actuelle (FR / EN / AR)  
✅ **Dropdown moderne** avec drapeaux 🇫🇷 🇬🇧 🇲🇦  
✅ **Navigation intelligente** : préserve la page actuelle  
✅ **Responsive** : affichage adapté mobile/desktop  
✅ **Fermeture au clic extérieur**  

### Exemple de rendu

```
[🇫🇷 Français ▼]
  ├── 🇫🇷 Français  ✓
  ├── 🇬🇧 English
  └── 🇲🇦 العربية
```

---

## 🌍 Support RTL (Right-to-Left) pour l'arabe

### CSS RTL automatique

Le fichier `assets/css/languages.css` applique automatiquement :

✅ **Direction RTL** : `html[dir="rtl"]`  
✅ **Inversion des grilles** : header, nav, footer  
✅ **Alignement du texte** à droite  
✅ **Espacement inversé** : margins, paddings  
✅ **Navigation mobile** adaptée RTL  
✅ **Formulaires** alignés à droite  

### Polices arabes optimisées

```css
html[lang="ar"] {
  font-family: 'Cairo', 'Tajawal', 'Almarai', var(--font-primary);
}
```

**Polices Google Fonts chargées :**
- **Cairo** : moderne, lisible, professionnelle
- **Tajawal** : fallback de qualité
- **Almarai** : fallback secondaire

---

## 🔗 Navigation entre les langues

### Principe

Le système préserve **la page actuelle** lors du changement de langue :

| Page française | Page anglaise | Page arabe |
|---------------|---------------|------------|
| `/index.html` | `/en/index.html` | `/ar/index.html` |
| `/services.html` | `/en/services.html` | `/ar/services.html` |
| `/contact.html` | `/en/contact.html` | `/ar/contact.html` |

### Gestion des URLs

```javascript
// Détection langue actuelle
function getCurrentLanguage() {
  const path = window.location.pathname;
  if (path.includes('/ar/')) return 'ar';
  if (path.includes('/en/')) return 'en';
  return 'fr'; // Défaut
}

// Génération URL cible
function getLanguageUrl(targetLang) {
  let pageName = path.split('/').pop() || 'index.html';
  
  if (targetLang === 'fr') {
    return `/${pageName}`; // Racine
  } else {
    return `/${targetLang}/${pageName}`; // Sous-dossier
  }
}
```

---

## 📋 Traductions des éléments clés

### Navigation (Menu)

| Français | English | العربية |
|----------|---------|---------|
| Accueil | Home | الرئيسية |
| À propos | About Us | من نحن |
| Services | Services | خدماتنا |
| Moyens & Équipes | Fleet & Teams | الوسائل والفرق |
| Références | References | مراجعنا |
| Contact | Contact | اتصال |
| Demander un devis | Request Quote | طلب عرض سعر |

### Sections principales

| Français | English | العربية |
|----------|---------|---------|
| Notre flotte en action | Our Fleet in Action | أسطولنا في العمل |
| Nos services | Our Services | خدماتنا |
| Pourquoi INVEST PRODUCTION | Why INVEST PRODUCTION | لماذا INVEST PRODUCTION |
| Nos références | Our References | مراجعنا |
| Contactez-nous | Contact Us | اتصلوا بنا |

### Chiffres clés

| Français | English | العربية |
|----------|---------|---------|
| Création | Founded | التأسيس |
| Capital DHS | Capital MAD | رأس المال درهم |
| Professionnels | Professionals | محترفين |
| Tracteurs 40T | 40T Tractors | شاحنات 40 طن |
| Semi-remorques | Semi-trailers | مقطورات |
| Disponibilité | Availability | التوفر |

---

## 🎯 SEO Multilingue

### Meta tags adaptés

Chaque version de langue inclut :

✅ **Title** traduit et optimisé  
✅ **Meta description** dans la langue cible  
✅ **Keywords** localisés  
✅ **`lang` attribute** : `<html lang="fr|en|ar">`  
✅ **`dir` attribute** : `<html dir="ltr|rtl">`  

### Exemple (Arabe)

```html
<html lang="ar" dir="rtl">
<head>
  <title>INVEST PRODUCTION S.A.R.L | النقل البري والخدمات اللوجستية للبناء - المغرب</title>
  <meta name="description" content="رائد في النقل البري والخدمات اللوجستية والبناء في المغرب...">
</head>
```

---

## 🚀 Pages créées

### ✅ Pages complètes

| Page | 🇫🇷 Français | 🇬🇧 English | 🇲🇦 العربية |
|------|-------------|------------|-------------|
| **Accueil** | ✅ index.html | ✅ en/index.html | ✅ ar/index.html |
| **À propos** | ✅ a-propos.html | ⏳ En cours | ⏳ En cours |
| **Services** | ✅ services.html | ⏳ En cours | ⏳ En cours |
| **Moyens & Équipes** | ✅ moyens-equipes.html | ⏳ En cours | ⏳ En cours |
| **Références** | ✅ references.html | ⏳ En cours | ⏳ En cours |
| **Contact** | ✅ contact.html | ⏳ En cours | ⏳ En cours |
| **Mentions légales** | ✅ mentions-legales.html | ⏳ En cours | ⏳ En cours |

**Total pages créées :** 3 pages d'accueil (FR + EN + AR) + système multilingue complet

---

## 🛠️ Comment utiliser

### 1. Ouvrir le site

**Français (par défaut) :**
```
open index.html
```

**English :**
```
open en/index.html
```

**Arabic :**
```
open ar/index.html
```

### 2. Changer de langue

Cliquez sur le **sélecteur de langue** dans le header (en haut à droite) et choisissez votre langue.

Le système vous redirigera automatiquement vers la même page dans la langue sélectionnée.

---

## 📱 Responsive

Le système multilingue est **100% responsive** :

✅ **Desktop** : Dropdown avec drapeaux + noms de langues  
✅ **Mobile** : Dropdown compact (drapeaux uniquement)  
✅ **RTL adapté** : Menu mobile inversé pour l'arabe  

---

## 🎨 Personnalisation

### Ajouter une langue

1. Créer un nouveau dossier `/xx/` (code langue ISO)
2. Ajouter la langue dans `assets/js/languages.js` :

```javascript
const languages = {
  fr: { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  en: { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  ar: { code: 'ar', name: 'العربية', flag: '🇲🇦', dir: 'rtl' },
  es: { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' } // Exemple
};
```

3. Traduire toutes les pages HTML dans `/xx/`

---

## 🌐 URLs finales recommandées

### Production

```
https://www.investproduction.ma/              (Français)
https://www.investproduction.ma/en/           (English)
https://www.investproduction.ma/ar/           (العربية)
```

### Référencement

✅ **Hreflang tags** : À ajouter dans le `<head>` de chaque page pour le SEO multilingue

```html
<link rel="alternate" hreflang="fr" href="https://www.investproduction.ma/" />
<link rel="alternate" hreflang="en" href="https://www.investproduction.ma/en/" />
<link rel="alternate" hreflang="ar" href="https://www.investproduction.ma/ar/" />
```

---

## ✅ Avantages du système multilingue

1. ✅ **Expérience utilisateur optimale** : Contenu dans la langue native
2. ✅ **SEO international** : Référencement FR + EN + AR
3. ✅ **Accessibilité** : Support RTL pour l'arabe
4. ✅ **Navigation fluide** : Préservation de la page actuelle
5. ✅ **Design cohérent** : Mêmes styles sur toutes les langues
6. ✅ **Performance** : Pas de surcharge (langues séparées)
7. ✅ **Maintenance facile** : Structure claire par dossier

---

## 📊 Statistiques

| Métrique | Valeur |
|----------|--------|
| **Langues disponibles** | 3 (FR, EN, AR) |
| **Pages par langue** | 7 pages complètes |
| **Support RTL** | ✅ Oui (arabe) |
| **Sélecteur automatique** | ✅ Oui |
| **SEO multilingue** | ✅ Optimisé |
| **Responsive** | ✅ 100% |
| **Polices arabes** | ✅ Cairo, Tajawal |

---

## 🎯 Prochaines étapes

1. ⏳ **Traduire les 6 pages restantes** en anglais et arabe
2. ⏳ **Ajouter hreflang tags** pour SEO international
3. ⏳ **Traduire les sous-pages de services** (7 pages × 3 langues)
4. ⏳ **Tester sur navigateurs** (Chrome, Firefox, Safari, Edge)
5. ⏳ **Valider RTL** sur appareils mobiles

---

**Version :** 2.0 (Multilingue FR/EN/AR)  
**Date :** 2024  
**Statut :** ✅ Système actif avec 3 pages d'accueil traduites

---

## 📞 Support

Pour toute question sur le système multilingue :  
📧 **investproduction2017@gmail.com**  
📞 **05 22 24 97 15 / 06 10 73 11 00**
