# 📸 Intégration des Photos Réelles

## ⚠️ PROBLÈME IDENTIFIÉ

Les URLs des images fournies ne sont pas directement accessibles (erreur HTTP 403 - Accès refusé).

## ✅ SOLUTION : 2 Options

---

### **OPTION 1 : Téléchargement Manuel (Recommandé)**

#### Étape 1 : Télécharger les 7 photos

Téléchargez manuellement chaque photo en cliquant sur ces liens :

1. **Photo 1 - Tracteur Mercedes 1** : https://www.genspark.ai/api/files/s/FFfGivf5?cache_control=3600
2. **Photo 2 - Tracteur Mercedes 2** : https://www.genspark.ai/api/files/s/fXB8ZSbx?cache_control=3600
3. **Photo 3 - Tracteur Mercedes 3** : https://www.genspark.ai/api/files/s/Lx3aLZnZ?cache_control=3600
4. **Photo 4 - Benne chantier** : https://www.genspark.ai/api/files/s/z80jpSMh?cache_control=3600
5. **Photo 5 - Chantier BTP 1** : https://www.genspark.ai/api/files/s/YyY9RGhb?cache_control=3600
6. **Photo 6 - Chantier BTP 2** : https://www.genspark.ai/api/files/s/XPK3X7ub?cache_control=3600
7. **Photo 7 - Chantier BTP 3** : https://www.genspark.ai/api/files/s/VsjPVz6J?cache_control=3600

#### Étape 2 : Créer la structure de dossiers

Dans votre dossier `invest-production/`, créez :

```
invest-production/
├── index.html
├── assets/
│   └── images/
│       ├── flotte-01.jpg  (Photo 1)
│       ├── flotte-02.jpg  (Photo 2)
│       ├── flotte-03.jpg  (Photo 3)
│       ├── benne-01.jpg   (Photo 4)
│       ├── chantier-01.jpg (Photo 5)
│       ├── chantier-02.jpg (Photo 6)
│       └── chantier-03.jpg (Photo 7)
```

#### Étape 3 : Utiliser les fichiers HTML mis à jour

J'ai créé des versions HTML qui utilisent des chemins locaux :
- `index-photos-locales.html`
- `moyens-equipes-photos-locales.html`
- `en/index-photos-locales.html`
- `ar/index-photos-locales.html`

Ces fichiers pointent vers `assets/images/...` au lieu des URLs externes.

---

### **OPTION 2 : Hébergement sur ImgBB (Gratuit)**

Si vous préférez utiliser des URLs, vous pouvez héberger vos photos sur un service gratuit :

1. Allez sur **https://imgbb.com/**
2. Uploadez chaque photo
3. Copiez l'URL "Direct Link"
4. Je mettrai à jour le site avec ces nouvelles URLs

---

## 📋 CHECKLIST AVANT NETLIFY DROP

- [ ] Télécharger les 7 photos
- [ ] Créer le dossier `assets/images/`
- [ ] Placer les photos dans le bon dossier
- [ ] Renommer les fichiers HTML :
  - `index-photos-locales.html` → `index.html`
  - `moyens-equipes-photos-locales.html` → `moyens-equipes.html`
  - `en/index-photos-locales.html` → `en/index.html`
  - `ar/index-photos-locales.html` → `ar/index.html`

---

## 🚀 PRÊT POUR NETLIFY DROP

Une fois les photos en place :

1. Votre dossier `invest-production/` sera complet
2. Glissez-déposez le dossier sur **https://app.netlify.com/drop**
3. Votre site sera en ligne avec les vraies photos !

---

## ❓ BESOIN D'AIDE ?

Dites-moi quelle option vous préférez :
- **A)** Je télécharge les photos manuellement
- **B)** Je les héberge sur ImgBB
- **C)** Créez-moi une version simplifiée sans dépendances externes
