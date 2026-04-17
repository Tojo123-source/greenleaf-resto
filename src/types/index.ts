export interface Reservation {
  id?: string;
  nom: string;
  email: string;
  telephone: string;
  date: string;
  convives: number;
  message: string;
  created_at?: string;
}

export interface MenuItem {
  id: number;
  nom: string;
  description: string;
  prix: string;
  image: string;
  categorie: string;
}

export interface Testimonial {
  id: number;
  nom: string;
  note: number;
  commentaire: string;
  date: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  categorie: 'plats' | 'ambiance' | 'evenements';
}
