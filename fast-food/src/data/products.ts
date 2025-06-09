export interface Product {
  id: number    
  title: string
  description: string
  price: number
  star: number
  image: string         
}


export const products: Product[] = [
  {
    id: 1,
    title: "Cheeseburger Wendy's Burger  ",
    description: "The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.",
    price: 8.99,
    star:3.5,
    image: '/products/1.jpg',
  },
  {
    id: 2,
    title: "Hamburger Veggie Burger",
    description: "Enjoy our delicious Hamburger Veggie Burger, made with a savory blend of fresh vegetables and herbs, topped with crisp lettuce, juicy tomatoes, and tangy pickles, all served on a soft, toasted bun. ",
    price: 9.24,
    star:3.8,
    image: '/products/2.jpg',
  },
  {
    id: 3,
    title: "Hamburger Chicken Burger",
    description: "Our chicken burger is a delicious and healthier alternative to traditional beef burgers, perfect for those looking for a lighter meal option. Try it today and experience the mouth-watering flavors of our Hamburger Chicken Burger!",
    price: 10.90,
    star:4.3,
    image: '/products/3.png',
  },
  {
    id: 4,
    title: "Fried Chicken Burger",
    description: "Indulge in our crispy and savory Fried Chicken Burger, made with a juicy chicken patty, hand-breaded and deep-fried to perfection, served on a warm bun with lettuce, tomato, and a creamy sauce.",
    price: 12.32,
    star:4.7,
    image: '/products/4.png',
  },

]