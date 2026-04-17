# GreenLeaf Restaurant

Site web premium pour un restaurant végétalien gastronomique basé dans le Val-d'Oise (95), Île-de-France.

## 🌐 URL du site

**https://dmloj5rdiprni.ok.kimi.link**

## 🛠 Stack Technique

- **React 18** + **Vite** - Framework et bundler
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides et interactions
- **React Hook Form** + **Zod** - Gestion et validation des formulaires
- **Lucide React** - Icônes modernes
- **Supabase** - Base de données pour les réservations
- **Brevo API** - Envoi d'emails de confirmation

## ✨ Fonctionnalités

### Sections
- **Hero** - Section d'accueil impactante avec vidéo/image de fond
- **Menu Signature** - 8 plats phares avec photos et descriptions
- **L'Expérience** - Philosophie et valeurs du restaurant
- **Galerie** - Grille photo filtrable avec lightbox
- **Avis Clients** - Carrousel de témoignages
- **Contact & Réservation** - Formulaire complet + carte + coordonnées

### Fonctionnalités techniques
- Formulaire de réservation avec validation Zod
- Sauvegarde des réservations dans Supabase
- Envoi d'email de confirmation via Brevo API
- Animation confetti en cas de succès
- Boutons flottants WhatsApp et réservation rapide
- Design responsive (mobile first)
- SEO optimisé (meta tags, Open Graph)
- Animations fluides au scroll (Framer Motion)

## 🚀 Installation

```bash
# Cloner le projet
git clone <repo-url>
cd greenleaf-restaurant

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Remplir les variables dans .env

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
```

## 📁 Structure du projet

```
greenleaf-restaurant/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Navigation.tsx   # Barre de navigation
│   │   ├── FloatingButtons.tsx  # Boutons flottants
│   │   ├── Footer.tsx       # Pied de page
│   │   └── Confetti.tsx     # Animation de confetti
│   ├── sections/            # Sections de la page
│   │   ├── Hero.tsx         # Section d'accueil
│   │   ├── Menu.tsx         # Menu signature
│   │   ├── About.tsx        # À propos
│   │   ├── Gallery.tsx      # Galerie photo
│   │   ├── Testimonials.tsx # Avis clients
│   │   └── Contact.tsx      # Contact et réservation
│   ├── hooks/               # Hooks personnalisés
│   │   ├── useScrollAnimation.ts
│   │   └── useReservation.ts
│   ├── lib/                 # Utilitaires et configurations
│   │   ├── supabase.ts      # Client Supabase
│   │   ├── brevo.ts         # Service d'email Brevo
│   │   ├── validation.ts    # Schémas Zod
│   │   └── data.ts          # Données du site
│   ├── types/               # Types TypeScript
│   │   └── index.ts
│   ├── App.tsx              # Composant principal
│   └── main.tsx             # Point d'entrée
├── .env                     # Variables d'environnement
├── .env.example             # Exemple de variables
├── index.html               # HTML principal
├── tailwind.config.js       # Configuration Tailwind
└── vite.config.ts           # Configuration Vite
```

## 🔧 Variables d'environnement

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_anon_supabase
VITE_BREVO_API_KEY=votre_clé_api_brevo
```

## 📱 Contact

- **WhatsApp** : +261 36 77 299 58
- **Email** : novaskol393@gmail.com
- **Adresse** : 12 Rue de Paris, 95000 Cergy, Val-d'Oise

## 📝 License

© 2026 GreenLeaf Restaurant. Tous droits réservés.
