import { getSupabase } from './supabase';

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  price_retail: number;
  price_wholesale: number | null;
  wholesale_min_qty: number;
  stock: number;
  image_url: string;
  is_alcoholic: boolean;
}

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Johnnie Walker Black Label 1L",
    slug: "johnnie-walker-black-1l",
    description: "Whisky écossais de renom, vieilli 12 ans.",
    category: "Whisky",
    price_retail: 22000,
    price_wholesale: 19500,
    wholesale_min_qty: 6,
    stock: 48,
    image_url: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800",
    is_alcoholic: true
  },
  {
    id: "2",
    name: "Bière Béninoise La Béninoise (Casier 24)",
    slug: "casier-beninoise-24",
    description: "L'authentique bière nationale du Bénin en format casier.",
    category: "Bieres et cannettes",
    price_retail: 11500,
    price_wholesale: 10500,
    wholesale_min_qty: 5,
    stock: 120,
    image_url: "https://images.unsplash.com/photo-1608270199120-d47a46973059?w=800",
    is_alcoholic: true
  },
  {
    id: "3",
    name: "Champagne Moët & Chandon Brut Impérial",
    slug: "moet-chandon-brut",
    description: "L'icône mondiale du champagne pour vos célébrations royales.",
    category: "Champagnes et aperitifs",
    price_retail: 45000,
    price_wholesale: 41000,
    wholesale_min_qty: 3,
    stock: 24,
    image_url: "https://images.unsplash.com/photo-1594488518042-45e0d29d893f?w=800",
    is_alcoholic: true
  },
  {
    id: "4",
    name: "Pack Eau Minérale Possotomé 1.5L (Pack de 6)",
    slug: "pack-eau-possotome-6",
    description: "Eau minérale naturelle thermale du Bénin.",
    category: "Eaux en bouteille",
    price_retail: 2500,
    price_wholesale: 2200,
    wholesale_min_qty: 10,
    stock: 200,
    image_url: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=800",
    is_alcoholic: false
  }
];

export async function getProducts(): Promise<Product[]> {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.from('boissons').select('*');
    if (error || !data || data.length === 0) {
      return INITIAL_PRODUCTS;
    }
    return data as Product[];
  } catch {
    return INITIAL_PRODUCTS;
  }
}
