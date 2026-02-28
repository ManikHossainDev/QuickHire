export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
}

export interface CartItem {
  id: number;
  productId: number;
  title: string;
  price: number;
  image: string;
  category: string;
  color: string;
  size: string;
  quantity: number;
}
