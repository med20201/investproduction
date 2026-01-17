# INVEST PRODUCTION S.A.R.L — Site Web Officiel

## 🚀 Présentation du projet

Site web professionnel **multi-pages et multilingue** pour **INVEST PRODUCTION S.A.R.L**, entreprise leader en **transport routier, logistique et BTP au Maroc**.

**✅ STATUS : PRODUCTION-READY v4.0.0 FINAL**

**Style & Inspiration :** Design moderne inspiré de TGCC avec palette violet-rose, sobriété corporate, sections numérotées et mise en avant des **11 références clients** avec logos SVG interactifs.

### 🎯 Chiffres Clés
- **10 pages HTML** (8 FR + 1 EN + 1 AR)
- **13 logos clients SVG** intégrés
- **3 langues** (Français / English / العربية)
- **42 collaborateurs** | **20 tracteurs Mercedes 40T** | **30 bennes 30m³**
- **Disponibilité 24h/24 - 7j/7**
- **Capital social : 5 000 000 DHS**

### 🖼️ Aperçus Visuels
- 🌐 **Site web** : Voir `APERCUS-VISUELS.md`
- 💼 **Carte de visite** : Design recto-verso professionnel
- 📊 **Présentation PPT** : 15 slides HTML + PDF-ready
- 📄 **Brochures** : 3 formats prêts à imprimer

---

## 📂 Architecture du site

### Pages principales (✅ Complètes)

```
/
├── index.html                    (Accueil FR : hero, services, 11 logos clients)
├── a-propos.html                 (À propos : mission, vision, valeurs, organisation)
├── services.html                 (Hub services : liste complète des 7 prestations)
├── moyens-equipes.html           (Moyens d'exploitation + 5 photos + organigramme 42 pers)
├── references.html               (Page dédiée 11 clients : HOLCIM, LAFARGE, NGE, COLAS...)
├── contact.html                  (Formulaire devis + coordonnées Fès/Casa + FAQ)
├── mentions-legales.html         (Informations juridiques complètes)
├── plan-du-site.html             (Plan de navigation complet)
│
├── en/
│   └── index.html                (Homepage English version)
│
├── ar/
│   └── index.html                (الصفحة الرئيسية - RTL version arabe)
│
├── assets/
│   ├── css/
│   │   ├── style.css             (CSS partagé : palette brand, composants, responsive)
│   │   └── languages.css         (CSS multilingue + RTL)
│   ├── js/
│   │   └── languages.js          (Sélecteur de langue FR/EN/AR)
│   ├── logo.svg                  (Logo officiel INVEST PRODUCTION)
│   └── logos/                    (13 logos clients SVG)
│       ├── holcim-logo.svg       (Vert #00A651)
│       ├── lafarge-logo.svg      (Rouge #E2001A)
│       ├── nge-logo.svg          (Rouge #C41E3A)
│       ├── cmb-logo.svg          (Bleu #0066A1)
│       ├── gcr-logo.svg          (Bleu #003DA5)
│       ├── sotravo-logo.svg      (Orange #FF6B00)
│       ├── dogus-logo.svg        (Rouge #C41E3A)
│       ├── gtr-logo.svg          (Bleu Marine #1E3A8A)
│       ├── colas-logo.svg        (Rouge #E30613)
│       ├── eber-logo.svg         (Vert #006838)
│       ├── snl-logo.svg          (Bleu #0066A1)
│       ├── omhg-logo.svg         (Bleu #0066A1)
│       └── autoroutes-logo.svg   (Vert #00843D)
```

---

## 🎨 Identité visuelle

### Logo officiel intégré
**✅ Logo moderne INVEST PRODUCTION** :
- **Fichier** : `assets/logo-new.png` (nouveau logo fourni par le client)
- **Texte "INVEST PRODUCTION"** à côté du logo sur les 10 pages
- **Style** : Blanc, gras, lettres espacées (1.25rem)
- **Position** : En haut à gauche du header
- **Format** : PNG responsive avec texte d'accompagnement

### Palette de couleurs (thème clair)
- **Background :** `#FFFFFF` (Blanc)
- **Cards :** `#FFFFFF` avec ombres subtiles
- **Brand Primary :** `#7B3FF2` (Violet)
- **Brand Secondary :** `#E91E8C` (Rose)
- **Gradient :** `linear-gradient(135deg, #7B3FF2 0%, #E91E8C 100%)`
- **Texte principal :** `#1A1A1A` (Gris foncé)
- **Texte secondaire :** `#666666`

### Images réelles intégrées
**✅ Photos professionnelles** extraites et intégrées :
- **Flotte Mercedes Actros 40T** (page Accueil + Moyens & Équipes)
- **Semi-remorques bennes chantier** (page Accueil)
- **Chantiers BTP en opération** (page Accueil + Moyens & Équipes)
- **Transport agrégats** (page Moyens & Équipes)
- **Extraction et terrassement** (page Moyens & Équipes)

### Logos des références clients
**✅ Logos SVG professionnels** créés et intégrés :
- **Holcim** (`assets/logos/holcim-logo.svg`) - Vert #00A651
- **Lafarge** (`assets/logos/lafarge-logo.svg`) - Rouge #E2001A
- **NGE Groupe** (`assets/logos/nge-logo.svg`) - Bleu/Vert/Orange
- **Ciments du Maroc** (`assets/logos/cmb-logo.svg`) - Bleu #0066A1
- **ONCF/OMHG** (`assets/logos/omhg-logo.svg`) - Bleu #0066A1
- **Autoroutes du Maroc** (`assets/logos/autoroutes-logo.svg`) - Vert #00843D

**Effet visuel** :
- Logos en grayscale par défaut (opacité 70%)
- Couleurs originales au survol + scale 1.05
- Transition fluide pour une expérience premium

### Typographie
- **Headings :** Poppins (700/800)
- **Body :** Inter (300–800)
- **Source :** Google Fonts

### Composants clés
- **Cards** avec effet hover + bordure gradient
- **Section numbers** (.01, .02, .03...) style TGCC
- **Trust bar** (chiffres clés visuels)
- **Menu sticky** avec mobile responsive
- **Formulaire contact** complet B2B

---

## 🔧 Technologies utilisées

- **HTML5** (sémantique, structure claire)
- **CSS3** (Grid, Flexbox, animations, responsive)
- **JavaScript Vanilla** (menu mobile, FAQ accordion, form)
- **Google Fonts** (Inter + Poppins)
- **Aucune dépendance** externe (pas de framework)

---

## ✅ Fonctionnalités actuelles

### Navigation
- [x] Menu desktop sticky avec effet hover
- [x] Menu mobile responsive (hamburger)
- [x] Liens internes cohérents entre toutes les pages
- [x] Footer complet avec liens rapides

### Pages
- [x] **Accueil** — Hero + services + références + chiffres clés
- [x] **À propos** — Histoire, mission, vision, valeurs, organisation
- [x] **Services** — Hub avec 7 services + liens vers sous-pages
- [x] **Moyens & équipes** — Flotte, parc, organisation 24/7
- [x] **Références** — Clients majeurs (HOLCIM, LAFARGE, NGE...)
- [x] **Contact** — Formulaire devis B2B + coordonnées + FAQ
- [x] **Mentions légales** — Infos juridiques complètes

### SEO & Accessibilité
- [x] Meta tags (title, description) sur chaque page
- [x] Structure sémantique (header, main, section, footer)
- [x] Schema.org JSON-LD (LocalBusiness) sur accueil
- [x] URLs SEO-friendly
- [x] Responsive mobile-first
- [x] Temps de chargement optimisé (0 erreur console)

---

## 🚧 À compléter (optionnel)

### Sous-pages de services (7 pages)
Créer les pages détaillées dans `/services/` :
- `transport-marchandises.html`
- `transport-agregats.html`
- `transport-enrobes.html`
- `terrassement.html`
- `location-engins.html`
- `negoce-materiaux.html`
- `travaux-divers-btp.html`

**Structure recommandée par sous-page :**
- Hero (titre + description)
- Section "Pour qui ?" (cas d'usage)
- Section "Comment ça marche" (process)
- Section "Nos engagements"
- CTA (demande de devis)

### Améliorations possibles
- [ ] Ajouter des images réelles (camions, chantiers, équipes)
- [ ] Intégration Google Maps sur page Contact
- [ ] Slider témoignages clients
- [ ] Section actualités/blog
- [ ] Formulaire backend fonctionnel (PHP/Node.js)
- [ ] Analytics (Google Analytics / Meta Pixel)
- [ ] Multi-langue (Arabe, Français, Anglais)

---

## 📱 Responsive

Le site est **100% responsive** avec 3 breakpoints :
- **Mobile :** < 640px
- **Tablet :** 640px – 968px
- **Desktop :** > 968px

Navigation mobile fonctionnelle avec menu hamburger.

---

## 🎯 Objectifs du site

1. **Présenter l'entreprise** et son expertise (transport, logistique, BTP)
2. **Renforcer la crédibilité** auprès des grands comptes (HOLCIM, LAFARGE...)
3. **Générer des demandes de devis** via formulaire B2B
4. **Référencement local Maroc** (Fès, Casablanca)

---

## 📞 Coordonnées INVEST PRODUCTION S.A.R.L

**Siège social (Fès) :**  
Magasin 4, Lot 62, Berdellah 2, Ain Smen – Fès

**Bureau opérationnel (Casablanca) :**  
J1 Office Center, Étage 5, Bureau n°506  
Angle Bd My Ismail et Bd Mohammed Ben Mekki  
Ain Sebaa, Casablanca

**Téléphone :** 05 22 24 97 15 / 06 10 73 11 00  
**Email :** investproduction2017@gmail.com  
**Disponibilité :** 24h/24 – 7j/7

---

## 🚀 Déploiement

### Option 1 : Hébergement statique
Uploadez tous les fichiers sur un hébergeur web (OVH, Hostinger, o2switch...) via FTP.

### Option 2 : GitHub Pages / Netlify / Vercel
1. Push le projet sur GitHub
2. Connectez le repo à Netlify/Vercel
3. Deploy automatique

### Option 3 : Serveur local (test)
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

Puis ouvrez `http://localhost:8000/index.html`

---

## 📊 Chiffres clés du projet

- **9 pages HTML** créées
- **1 CSS partagé** (~16ko)
- **0 dépendance** externe
- **0 erreur console** (testé)
- **100% responsive**
- **SEO-ready**
- **Temps de chargement** < 6s (optimal)

---

## 🏆 Références clients (site)

Le site met en avant les partenariats avec des **grands comptes marocains** :

- HOLCIM BETON
- LAFARGE BETON
- GCR (Groupe Chaâbi)
- SOTRAVO
- DOGUS INSAT
- NGE (GRP)
- GTR
- COLLAS
- EBER
- SNL TRAVAUX
- BETON CHANTIER
- + Autres partenaires reconnus

---

## 📝 Notes techniques

### CSS
- **Variables CSS** (`:root`) pour la palette brand
- **Grid & Flexbox** pour le layout
- **Transitions CSS** fluides (0.3s cubic-bezier)
- **Mobile-first** approach
- **Cards avec hover effects**

### JavaScript
- Menu mobile toggle
- FAQ accordion (expand/collapse)
- Form validation (simulation)
- Smooth scroll pour ancres

### Accessibilité
- Labels sur formulaires
- ARIA labels sur boutons
- Structure sémantique HTML5
- Contraste texte/fond optimisé

---

## 🔗 URLs recommandées (SEO)

**Pages principales :**
- `/` (Accueil)
- `/a-propos/` (À propos)
- `/services/` (Services hub)
- `/moyens-equipes/` (Moyens & équipes)
- `/references/` (Références)
- `/contact/` (Contact / Devis)
- `/mentions-legales/` (Mentions légales)

**Services (à créer) :**
- `/services/transport-marchandises/`
- `/services/transport-agregats/`
- `/services/transport-enrobes/`
- `/services/terrassement/`
- `/services/location-engins/`
- `/services/negoce-materiaux/`
- `/services/travaux-divers-btp/`

---

## 🎯 Prochaines étapes recommandées

1. **Créer les 7 sous-pages de services** (templates prêts dans ce README)
2. **Ajouter des images réelles** (camions, chantiers, équipes)
3. **Connecter le formulaire** à un backend (PHP/Node.js) ou service (Formspree, Netlify Forms)
4. **Intégrer Google Maps** sur page Contact (iframe ou API)
5. **Configurer Analytics** (Google Analytics 4)
6. **Optimiser images** (compression WebP, lazy loading)
7. **Ajouter sitemap.xml** et robots.txt pour SEO
8. **Tester performance** (Google PageSpeed Insights)

---

## 📄 Licence

© 2024 INVEST PRODUCTION S.A.R.L. Tous droits réservés.  
Site développé dans le cadre de la communication digitale de l'entreprise.

---

## 🤝 Support

Pour toute question technique ou modification du site :  
📧 **investproduction2017@gmail.com**  
📞 **05 22 24 97 15 / 06 10 73 11 00**

---

**Version :** 1.0  
**Dernière mise à jour :** 2024  
**Statut :** ✅ Production-ready (pages principales complètes)
