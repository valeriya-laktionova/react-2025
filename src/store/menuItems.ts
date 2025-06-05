export type MenuItem = {
  id: string;
  meal: string;
  price: number;
  img: string;
  instructions: string;
  category: string;
};

export type CartProduct = Omit<MenuItem, 'img' | 'instructions' | 'category'> & {
  quantity: number;
};