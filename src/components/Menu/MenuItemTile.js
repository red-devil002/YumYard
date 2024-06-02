import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({onAddToCart, ...item}) {
  const {image, description, name, basePrice,
    sizes, extraIngredientPrices,
  } = item;

  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
    <img src={image} alt="Burger" />
    <h4 className="font-semibold my-2">{name}</h4>
    <p className="text-gray-500 text-sm line-clamp-3">{description}</p>
    <br />
    <button onClick={onAddToCart} className="button">
      Add to cart ${basePrice}
    </button>
  </div>
  );
}