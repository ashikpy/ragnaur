import WildChicken from "../../public/WildChicken.png";
import LiverChunks from "../../public/LiverChunks.png";
import LumpChunks from "../../public/Violet.png";
import VeggiesAndChicken from "../../public/Orange.png";

export const ProductData = [
  {
    id: 0,
    Img: WildChicken,
    title: "Wild Chicken",
    price: "10.00",
    available: true,
    rating: 3,
    meatContent: 80,
    description:
      "Packed with protein, this savory wild chicken meal is perfect for your dog's active lifestyle. Carefully crafted for optimal health and taste.",
    nonVeg: true,
    type: "MEAL",
  },
  {
    id: 1,
    Img: LiverChunks,
    title: "Liver Chunks",
    price: "20.00",
    available: true,
    rating: 3,
    meatContent: 80,
    description:
      "These tender liver chunks are a nutritious and irresistible treat. Great as a reward or a special meal addition. and packed with essential nutrients.",
    nonVeg: true,
    type: "Meal",
  },

  {
    id: 2,
    Img: LumpChunks,
    title: "Lamb Chunks",
    price: "30.00",
    available: true,
    rating: 3,
    meatContent: 40,
    description:
      "A hearty serving of lamb that supports muscle growth and vitality. Your dog will love every bite of this protein-rich delight ",
    nonVeg: true,
    type: "Meal",
  },
  {
    id: 3,
    Img: VeggiesAndChicken,
    title: "Veggies & Chicken",
    price: "40.00",
    available: false,
    rating: 3,
    meatContent: 40,
    description:
      "A wholesome blend of garden veggies and tender chicken for a balanced diet. Ideal for dogs who enjoy variety in their meals.",
    nonVeg: true,
    type: "Meal",
  },
];
