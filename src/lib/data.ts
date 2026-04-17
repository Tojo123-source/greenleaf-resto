import type { MenuItem, Testimonial, GalleryImage } from '@/types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    nom: 'Carpaccio de Betterave & Chèvre Frais',
    description: 'Fine lamelles de betterave bio marinées, chèvre frais maison, pousses de betterave, huile de noisette torréfiée et fleur de sel',
    prix: '16 €',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80',
    categorie: 'Entrée',
  },
  {
    id: 2,
    nom: 'Risotto aux Cèpes & Truffe Noire',
    description: 'Riz carnaroli crémeux, cèpes des bois franciliens, copeaux de truffe noire du Périgord, parmesan vieilli 24 mois',
    prix: '28 €',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80',
    categorie: 'Plat',
  },
  {
    id: 3,
    nom: 'Tartare d\'Avocat & Mangue',
    description: 'Avocat Hass bio, mangue fraîche, coriandre, citron vert, piment doux, chips de banane plantain et sauce tamari gingembre',
    prix: '18 €',
    image: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=800&q=80',
    categorie: 'Entrée',
  },
  {
    id: 4,
    nom: 'Filet de Tofu Fumé & Légumes Racines',
    description: 'Tofu artisanal fumé au bois de hêtre, carottes multicolores rôties, panais, sauce au vin rouge réduit et herbes de Provence',
    prix: '26 €',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    categorie: 'Plat',
  },
  {
    id: 5,
    nom: 'Curry Thaï aux Légumes de Saison',
    description: 'Lait de coco maison, pâte de curry verte, légumes du marché du 95, basilic thaï, citronnelle et riz jasmin parfumé',
    prix: '24 €',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80',
    categorie: 'Plat',
  },
  {
    id: 6,
    nom: 'Assiette de Fromages Végétaux Affinés',
    description: 'Sélection de 5 fromages maison affinés (noix de cajou, macadamia, amande), confiture de figues, pain aux graines',
    prix: '19 €',
    image: 'https://images.unsplash.com/photo-1635146037526-e73d2f2fc2f5?w=800&q=80',
    categorie: 'Dessert',
  },
  {
    id: 7,
    nom: 'Fondant au Chocolat Cru & Glace Vanille',
    description: 'Chocolat cru 85% équitable, cœur coulant, glace vanille de Madagascar maison, éclats de cacao et fleur de sel',
    prix: '14 €',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80',
    categorie: 'Dessert',
  },
  {
    id: 8,
    nom: 'Tarte Tatin Renversée aux Pommes',
    description: 'Pommes du verger du Val-d\'Oise, caramel au beurre salé végétal, pâte feuilletée maison, crème fouettée coco-vanille',
    prix: '15 €',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=800&q=80',
    categorie: 'Dessert',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    nom: 'Sophie M.',
    note: 5,
    commentaire: 'Une expérience culinaire exceptionnelle ! Chaque plat est une œuvre d\'art. Le risotto aux cèpes est tout simplement divin. Le cadre est magnifique et le service impeccable.',
    date: '15 mars 2026',
  },
  {
    id: 2,
    nom: 'Pierre L.',
    note: 5,
    commentaire: 'Je ne suis pas végétalien et pourtant j\'ai été bluffé par la créativité et les saveurs. Le chef est un véritable artiste. À ne pas manquer dans le 95 !',
    date: '2 avril 2026',
  },
  {
    id: 3,
    nom: 'Marie-Claire D.',
    note: 5,
    commentaire: 'Nous avons célébré notre anniversaire de mariage ici. L\'accueil chaleureux, la carte des vins bio et les plats raffinés ont rendu cette soirée magique.',
    date: '28 mars 2026',
  },
  {
    id: 4,
    nom: 'Thomas B.',
    note: 5,
    commentaire: 'Enfin un restaurant gastronomique végétal qui ne fait pas de compromis sur le goût ! Les fromages maison sont incroyables. Je reviens très vite.',
    date: '10 avril 2026',
  },
  {
    id: 5,
    nom: 'Camille R.',
    note: 5,
    commentaire: 'Le carpaccio de betterave est une révélation. Des produits frais, locaux et une présentation digne des plus grands restaurants. Bravo GreenLeaf !',
    date: '5 avril 2026',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    alt: 'Plat signature GreenLeaf',
    categorie: 'plats',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    alt: 'Ambiance cosy du restaurant',
    categorie: 'ambiance',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80',
    alt: 'Préparation en cuisine',
    categorie: 'plats',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    alt: 'Salle du restaurant',
    categorie: 'ambiance',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80',
    alt: 'Événement privé',
    categorie: 'evenements',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    alt: 'Assiette gastronomique',
    categorie: 'plats',
  },
];

export const restaurantInfo = {
  nom: 'GreenLeaf Restaurant',
  adresse: '12 Rue de Paris, 95000 Cergy, Val-d\'Oise',
  telephone: '+261 36 77 299 58',
  email: 'novaskol393@gmail.com',
  horaires: {
    mardi: '12h00 - 14h30 | 19h00 - 22h30',
    mercredi: '12h00 - 14h30 | 19h00 - 22h30',
    jeudi: '12h00 - 14h30 | 19h00 - 22h30',
    vendredi: '12h00 - 14h30 | 19h00 - 23h00',
    samedi: '12h00 - 15h00 | 19h00 - 23h00',
    dimanche: '12h00 - 15h00',
  },
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.0!2d2.08!3d49.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDAyJzI0LjAiTiAywrAwNCczNi4wIkU!5e0!3m2!1sfr!2sfr!4v1',
};
