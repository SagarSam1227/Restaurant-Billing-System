
export var categoryArray = [
  'All',
  'Snacks',
  'Veg',
  'Non-veg',
  'Starters',
  'Soups',
  'Sides',
  'Desserts',
  'Beverages',
  'Daily Specials',
  'Alcohol'
] as const;

export type Category = typeof categoryArray[number];


export type ProductProps = {
  id: number;
  name: string;
  price: number;
  category:string;
  image: string;
  portion: string;
};



export interface CartState {
  items: { product: ProductProps, quantity: number }[];
  totalQuantity: number;
  totalAmount: number;
}