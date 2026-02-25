import type { Category, ProductProps } from "../types/data";



export const products: ProductProps[] = [
  {
    id: 1,
    name: "Veg Burger",
    price: 120,
    category:'Veg',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOLJSqVeARsH9X1ATZu3mHSrl5HflwaLHNA&s",
    portion: "Full"
  },
  {
    id: 2,
    name: "Pizza",
    category:"Snacks",
    price: 250,
    image: "https://b.zmtcdn.com/data/pictures/chains/9/4000009/ce0341e58cf96f163101b4dff77ed938.jpg?fit=around|960:500&crop=960:500;*,*",
    portion: "Medium"
  },
  {
    id: 3,
    name: "Pasta",
    category:"Snacks",
    price: 180,
    image: "https://www.yummytummyaarthi.com/wp-content/uploads/2022/11/red-sauce-pasta-1-500x500.jpg",
    portion: "Full"
  },
  {
    id: 4,
    name: "Sandwich",
    category:"Non-veg",
    price: 90,
    image: "https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?semt=ais_user_personalization&w=740&q=80",
    portion: "Single"
  },
  {
    id: 5,
    name: "Milkshake",
    price: 150,
    category:"Bevarages",
    image: "https://theseasidebaker.com/wp-content/uploads/2015/07/IMG_5142.jpg",
    portion: "Large"
  },
  {
    id: 6,
    name: "Veg Burger",
    price: 120,
    category:'Veg',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOLJSqVeARsH9X1ATZu3mHSrl5HflwaLHNA&s",
    portion: "Full"
  },
  {
    id: 7,
    name: "Pizza",
    category:"Snacks",
    price: 250,
    image: "https://b.zmtcdn.com/data/pictures/chains/9/4000009/ce0341e58cf96f163101b4dff77ed938.jpg?fit=around|960:500&crop=960:500;*,*",
    portion: "Medium"
  },
  {
    id: 8,
    name: "Pasta",
    category:"Snacks",
    price: 180,
    image: "https://www.yummytummyaarthi.com/wp-content/uploads/2022/11/red-sauce-pasta-1-500x500.jpg",
    portion: "Full"
  },
  {
    id: 9,
    name: "Sandwich",
    category:"Non-veg",
    price: 90,
    image: "https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?semt=ais_user_personalization&w=740&q=80",
    portion: "Single"
  },
  {
    id: 10,
    name: "Milkshake",
    price: 150,
    category:"Bevarages",
    image: "https://theseasidebaker.com/wp-content/uploads/2015/07/IMG_5142.jpg",
    portion: "Large"
  },
];

export const categories : Category[] = [
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
]
