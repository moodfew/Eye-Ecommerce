import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

interface CartProps {
  favorites: ClothingItem[];
}

function Cart({ favorites }: CartProps) {
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);
  const navigate = useNavigate();

  const handleBuyNowClick = (item: ClothingItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleProceedToCheckout = () => {
    if (selectedItem) {
      navigate("/checkout", { state: { item: selectedItem } });
    }
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto h-full flex w-full justify-center items-center m-10 p-2 px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favorites.map((clothing) => {
            return (
              <div
                key={clothing.id}
                className="relative bg-white border rounded-lg shadow-md dark:border-gray-700 transform transition duration-500 hover:scale-105"
              >
                <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                  {clothing.id}
                </div>
                <div className="p-3 flex justify-center">
                  <a href="#">
                    <img
                      id={`image-${clothing.id}`}
                      className="rounded-md"
                      src={clothing.image_url}
                      loading="lazy"
                      style={{ maxHeight: "600px" }}
                    />
                  </a>
                </div>
                <div className="px-4 pb-3">
                  <div>
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight hover:text-gray-700 text-gray-600">
                        {clothing.name} ★★★★{" "}
                        <p className="font-light inline text-lg">
                          ({clothing.reviews})
                        </p>
                      </h5>
                    </a>
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white mb-10 rounded-lg shadow-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end">
              <button
                className="text-gray-600 hover:text-gray-900 text-3xl"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:flex-1 pr-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {selectedItem.name}
                </h2>
                <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                <h3 className="text-lg font-bold mb-6">
                  ${selectedItem.price}
                </h3>
                <button
                  className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded hover:bg-blue-600"
                  onClick={handleProceedToCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
              <div className="md:flex-shrink-0 mt-6 md:mt-0 sm:justify-self-center">
                <img
                  src={selectedItem.image_url}
                  alt={selectedItem.name}
                  className="rounded-md"
                  style={{ maxHeight: "400px", width: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
