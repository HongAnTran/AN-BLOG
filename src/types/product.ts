interface Product {
  id: number;
  title: string;
  price: number;
  category: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type { Product };
