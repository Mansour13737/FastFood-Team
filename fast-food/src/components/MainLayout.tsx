'use client'

import { AppContext } from "@/app/context/AppContext";
import GlobalLoading from "./GlobalLoading";
import { Dispatch, MouseEventHandler, SetStateAction, useEffect, useState } from "react";
import { Filter } from "lucide";

interface MyLayoutProps {
  children: React.ReactNode;
}
type jsn = {
  id: number;
  title: string;
  description: string;
  price: number;
  star: number;
  image: string;
  isLiked: boolean
}
export default function MainLayout({ children }: MyLayoutProps) {

  const customStaff = [
    {
      id: 1,
      title: 'Tomato',
      img: '/tomato.svg'
    },
    {
      id: 2,
      title: 'Onion',
      img: '/onion.svg'
    },
    {
      id: 3,
      title: 'Pickles',
      img: '/pickles.svg'
    },
    {
      id: 4,
      title: 'Bacons',
      img: '/bacons.svg'
    },
  ]
  const customStaff2 = [
    {
      id: 1,
      title: 'Fries',
      img: '/fries.svg'
    },
    {
      id: 2,
      title: 'Coleslaw',
      img: '/coleslaw.svg'
    },
    {
      id: 3,
      title: 'Salad',
      img: '/salad.svg'
    },
    {
      id: 4,
      title: 'Onion',
      img: '/onion2.svg'
    },
  ]
  const products = [
    {
      id: 1,
      title: "Cheeseburger Wendy's Burger  ",
      description: "The Cheeseburger Wendy's Burger is a classic fast food burger that packs a punch of flavor in every bite. Made with a juicy beef patty cooked to perfection, it's topped with melted American cheese, crispy lettuce, ripe tomato, and crunchy pickles.",
      price: 8.99,
      star: 3.5,
      image: '/products/1.png',
      isLiked: false,
      category: 'combos',
    },
    {
      id: 2,
      title: "Hamburger Veggie Burger",
      description: "Enjoy our delicious Hamburger Veggie Burger, made with a savory blend of fresh vegetables and herbs, topped with crisp lettuce, juicy tomatoes, and tangy pickles, all served on a soft, toasted bun. ",
      price: 9.24,
      star: 3.8,
      image: '/products/2.png',
      isLiked: false,
      category: 'spicy',
    },
    {
      id: 3,
      title: "Hamburger Chicken Burger",
      description: "Our chicken burger is a delicious and healthier alternative to traditional beef burgers, perfect for those looking for a lighter meal option. Try it today and experience the mouth-watering flavors of our Hamburger Chicken Burger!",
      price: 10.90,
      star: 4.3,
      image: '/products/3.png',
      isLiked: false,
      category: 'hot',
    },
    {
      id: 4,
      title: "Fried Chicken Burger Crispy - Roasted ",
      description: "Indulge in our crispy and savory Fried Chicken Burger, made with a juicy chicken patty, hand-breaded and deep-fried to perfection, served on a warm bun with lettuce, tomato, and a creamy sauce.",
      price: 12.32,
      star: 4.7,
      image: '/products/4.png',
      isLiked: false,
      category: 'combos',
    },
    // New random products for all categories
    {
      id: 5,
      title: "Spicy Double Beef Burger",
      description: "A fiery double beef burger with jalapenos, spicy sauce, and pepper jack cheese.",
      price: 11.50,
      star: 4.1,
      image: '/products/1.png',
      isLiked: false,
      category: 'spicy',
    },
    {
      id: 6,
      title: "Hot BBQ Chicken Wrap",
      description: "Grilled chicken, hot BBQ sauce, and fresh veggies wrapped in a soft tortilla.",
      price: 10.20,
      star: 4.0,
      image: '/products/2.png',
      isLiked: false,
      category: 'hot',
    },
    {
      id: 7,
      title: "Combo Family Meal",
      description: "A family-sized combo with burgers, fries, and drinks for everyone.",
      price: 25.99,
      star: 4.8,
      image: '/products/3.png',
      isLiked: false,
      category: 'combos',
    },
    {
      id: 8,
      title: "Spicy Veggie Delight",
      description: "A spicy vegetarian burger with grilled veggies and hot sauce.",
      price: 9.99,
      star: 4.2,
      image: '/products/4.png',
      isLiked: false,
      category: 'spicy',
    },
    {
      id: 9,
      title: "Hot & Crispy Fish Burger",
      description: "Crispy fried fish fillet with hot sauce and lettuce in a fresh bun.",
      price: 13.50,
      star: 4.4,
      image: '/products/1.png',
      isLiked: false,
      category: 'hot',
    },
    {
      id: 10,
      title: "Mini Combo Snack Box",
      description: "A mini combo with sliders, fries, and a drink. Perfect for a quick bite!",
      price: 7.99,
      star: 3.9,
      image: '/products/2.png',
      isLiked: false,
      category: 'combos',
    },
  ]

  const [inputVal, setInputVal] = useState<number>(0)
  const [visaActive, setVisaActive] = useState<boolean>(false)
  const [masterActive, setMasterActive] = useState<boolean>(false)
  const [qtyNumber, setQtyNumber] = useState<number>(0)
  const [id, setId] = useState<number | undefined>()
  const product: jsn | undefined = products.find((p) => p.id === id)
  const [finalPrice, setFinalPrice] = useState<number | undefined>()
  const [liked, setLiked] = useState<string>("bg-[url('/heart.svg')]")
  const [productsState, setProductsState] = useState(products);

  // Load liked products from localStorage on mount
  useEffect(() => {
    const likedIds = JSON.parse(localStorage.getItem('likedProducts') || '[]');
    setProductsState(prev => prev.map(p => ({ ...p, isLiked: likedIds.includes(p.id) })));
  }, []);

  // handleLike updates both state and localStorage
  function handleLike(info: jsn): undefined {
    setProductsState(prev => {
      const updated = prev.map(item =>
        item.id === info.id ? { ...item, isLiked: !item.isLiked } : item
      );
      // Update localStorage
      const likedIds = updated.filter(p => p.isLiked).map(p => p.id);
      localStorage.setItem('likedProducts', JSON.stringify(likedIds));
      return updated;
    });
    return undefined;
  }

  function fixPrice() {
    setFinalPrice(product?.price)
  }

  useEffect(() => {
    if (visaActive === true) {
      setMasterActive(false)
    }
  }, [visaActive])

  useEffect(() => {
    if (masterActive === true) {
      setVisaActive(false)
    }
  }, [masterActive])

  return (
    <AppContext.Provider value={{ liked, setLiked, handleLike, customStaff, customStaff2, products: productsState, inputVal, setInputVal, visaActive, setVisaActive, masterActive, setMasterActive, qtyNumber, setQtyNumber, setId, id, finalPrice, setFinalPrice, fixPrice }}>
      <GlobalLoading />
      {children}
    </AppContext.Provider>
  )
}
