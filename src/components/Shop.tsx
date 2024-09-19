import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "./CartContext";

interface ClothingItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  rating: number;
  stock_quantity: number;
  reviews: string;
}

interface ShopProps {
  shopFavorite: (item: ClothingItem) => void;
  favorite: (item: ClothingItem) => void;
}

const Shop = (props: ShopProps) => {
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});
  const { addToCart } = useCart();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get("category") || "men";
  const searchQuery = searchParams.get("search") || "";
  const [currentCategory, setCurrentCategory] = useState(category);

  const navigate = useNavigate();
  const notify = () => toast("Item added to cart");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = searchQuery
          ? await axios.get(`http://localhost:3000/api/search?q=${searchQuery}`)
          : await axios.get(`http://localhost:3000/${currentCategory}`);
        setClothingItems(response.data);
        console.log(response.data);
        setClothingItems(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("Error fetching the data, ", err);
        setError(`Failed to fetch ${currentCategory} clothing`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentCategory, searchQuery]);

  const handleBuyNowClick = (item: ClothingItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleHeartClick = (itemId: number) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [itemId]: !prevLikedItems[itemId],
    }));
  };

  const toggleCategory = (category: string) => {
    setCurrentCategory(category);
    navigate(`/shop?category=${category}`);
  };

  const handleProceedToCheckout = () => {
    if (selectedItem) {
      addToCart(selectedItem);
      navigate("/checkout");
    }
  };

  const handleAddToCart = (item: ClothingItem) => {
    addToCart(item);
    notify();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />
      <CategoryButtons
        currentCategory={currentCategory}
        toggleCategory={toggleCategory}
      />
      <div className="mx-auto h-full flex w-full justify-center items-center m-10 p-2 px-12 py-8">
        <ToastContainer hideProgressBar={true} autoClose={900} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clothingItems.map((clothing) => (
            <ClothingItemCard
              key={clothing.id}
              clothing={clothing}
              likedItems={likedItems}
              handleHeartClick={handleHeartClick}
              handleBuyNowClick={handleBuyNowClick}
              handleAddToCart={handleAddToCart}
              shopFavorite={props.shopFavorite}
              favorite={props.favorite}
            />
          ))}
        </div>
      </div>
      {selectedItem && (
        <Modal
          selectedItem={selectedItem}
          handleCloseModal={handleCloseModal}
          handleProceedToCheckout={handleProceedToCheckout}
          handleAddToCart={handleAddToCart}
        />
      )}
    </>
  );
};

const CategoryButtons = ({ currentCategory, toggleCategory }) => (
  <div className="flex justify-center mx-auto w-full m-10">
    <button
      className={`mx-2 px-4 py-2 rounded ${
        currentCategory === "men"
          ? "bg-blue-500 text-white"
          : "bg-gray-300 text-gray-700"
      }`}
      onClick={() => toggleCategory("men")}
    >
      Men
    </button>
    <button
      className={`mx-2 px-4 py-2 rounded ${
        currentCategory === "accessories"
          ? "bg-blue-500 text-white"
          : "bg-gray-300 text-gray-700"
      }`}
      onClick={() => toggleCategory("accessories")}
    >
      Accessories
    </button>
  </div>
);

const ClothingItemCard = ({
  clothing,
  likedItems,
  handleHeartClick,
  handleBuyNowClick,
  handleAddToCart,
  shopFavorite,
  favorite,
}) => (
  <div className="relative bg-white border rounded-lg shadow-md dark:border-gray-700 transform transition duration-500 hover:scale-105">
    <div className="absolute top-3 right-3 rounded-full w-6 h-6 text-center">
      <button
        onClick={() => {
          shopFavorite(clothing);
          handleHeartClick(clothing.id);
        }}
        className={likedItems[clothing.id] ? "text-red-600" : "text-gray-600"}
      >
        <FaHeart />
      </button>
    </div>
    <div className="p-3 flex justify-center">
      <img
        id={`image-${clothing.id}`}
        className="rounded-md"
        src={clothing.image_url}
        loading="lazy"
        style={{ maxHeight: "600px" }}
      />
    </div>
    <div className="px-4 pb-3">
      <div>
        <h5 className="text-xl font-semibold tracking-tight hover:text-gray-700 text-gray-600">
          {clothing.name} ★★★★{" "}
          <p className="font-light inline text-lg">({clothing.reviews})</p>
        </h5>

        <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
          {clothing.description}
        </p>
        <h5 className="text-xl py-2 font-bold tracking-tight hover:text-gray-700 text-gray-600">
          {clothing.price}$
        </h5>
        <div className="flex justify-between gap-3">
          <button
            className="my-2 font-semibold rounded-md p-2 bg-orange-200 hover:bg-orange-300"
            onClick={() => handleBuyNowClick(clothing)}
          >
            Buy Now
          </button>
          <button
            className="my-2 font-semibold rounded-md p-2 bg-blue-200 hover:bg-blue-300"
            onClick={() => {
              favorite(clothing);
              handleAddToCart(clothing);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Modal = ({
  selectedItem,
  handleCloseModal,
  handleProceedToCheckout,
  handleAddToCart,
}) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="m-10 bg-white mb-10 rounded-lg shadow-lg p-6 max-w-lg max-h-screen overflow-y-auto">
      <div className="text-right">
        <button onClick={handleCloseModal} className="text-gray-500">
          Close
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4">{selectedItem.name}</h2>
      <img
        src={selectedItem.image_url}
        alt={selectedItem.name}
        className="mb-4"
      />
      <p>{selectedItem.description}</p>
      <p className="font-bold text-lg">${selectedItem.price}</p>
      <div className="mt-4 flex justify-between gap-3">
        <button
          className="my-2 font-semibold rounded-md p-2 bg-orange-200 hover:bg-orange-300"
          onClick={handleProceedToCheckout}
        >
          Proceed to Checkout
        </button>
        <button
          className="my-2 font-semibold rounded-md p-2 bg-blue-200 hover:bg-blue-300"
          onClick={() => {
            handleAddToCart(selectedItem);
            handleCloseModal();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default Shop;
