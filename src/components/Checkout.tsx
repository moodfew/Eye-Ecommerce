import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useCart } from "./CartContext";
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

function Checkout() {
  const [checkoutItems, setCheckoutItems] = useState<ClothingItem[]>([]);
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/token");
        const data = await response.json();
        setToken(data.token);
      } catch (error) {
        console.log("Error fetching token:", error);
      }
    };
    fetchToken();
  }, []);

  const [contact, setContact] = useState({
    email: "",
    cardHolder: "",
    cardNo: "",
    creditExpiry: "",
    creditCvc: "",
    billingAddress: "",
    billingZip: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      console.error("No token available!");
      return;
    }

    const orderData = {
      billingAddress: contact.billingAddress,
      shippingAddress: contact.billingAddress,
      billingZip: contact.billingZip,
      totalPrice: checkoutItems.reduce((acc, item) => acc + item.price, 0),
      status: "Pending",
      orderItems: checkoutItems.map((item) => ({
        productId: item.id,
        productType: item.category,
        quantity: 1,
        price: item.price,
      })),
    };

    try {
      const response = await fetch("http://localhost:3000/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log("Order placed successfully");
        navigate("/shop");
      } else {
        console.error("Error placing order");
      }
    } catch (error) {
      console.log("Error placing order:", error);
    }
  };

  useEffect(() => {
    setCheckoutItems(cartItems);
  }, [cartItems]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-5 grid gap-6">
        <div className="grid sm:px-10 lg:grid-cols-1 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">
              Check your items. And select a suitable shipping method.
            </p>
            {checkoutItems.map((item, index) => (
              <div
                className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6"
                key={index}
              >
                <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                  <img
                    className="m-2 h-28 w-30 rounded-md border object-cover object-center"
                    src={item.image_url}
                    alt=""
                  />
                  <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-semibold">{item.name}</span>
                    <span className="float-right text-gray-400">
                      {item.description}
                    </span>
                    <p className="mt-auto text-lg font-bold">{item.price}$</p>
                  </div>
                </div>
              </div>
            ))}

            <p className="mt-8 text-lg mb-4 font-medium">Shipping Methods</p>

            <div className="relative">
              <label
                className="mb-5 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="https://fedex-dims.brightspotgocdn.com/dims4/default/b70400e/2147483647/strip/true/crop/600x338+0+31/resize/1000x563!/quality/90/?url=https%3A%2F%2Ffedex-static.brightspotgocdn.com%2F3e%2Ff9%2Fc07dce373c19124d37fe12ae852e%2Flogo-corporate-600x400.jpg"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </div>
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <div>
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={contact.email}
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                  required
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Holder
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="cardHolder"
                  onChange={handleChange}
                  value={contact.cardHolder}
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                  required
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Details
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    type="text"
                    id="card-no"
                    name="cardNo"
                    onChange={handleChange}
                    value={contact.cardNo}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                    required
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z"
                      />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  name="creditExpiry"
                  onChange={handleChange}
                  value={contact.creditExpiry}
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="MM/YY"
                  required
                />
                <input
                  type="text"
                  name="creditCvc"
                  value={contact.creditCvc}
                  onChange={handleChange}
                  className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="CVC"
                  required
                />
              </div>
              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-shrink-0 sm:w-7/12 ">
                  <input
                    type="text"
                    id="billing-address"
                    name="billingAddress"
                    value={contact.billingAddress}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Street Address"
                    required
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img
                      className="h-4 w-4 object-contain"
                      src="/public/placeholder.png"
                      alt=""
                    />
                  </div>
                </div>

                <input
                  type="text"
                  name="billingZip"
                  value={contact.billingZip}
                  onChange={handleChange}
                  className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="ZIP"
                  required
                />
              </div>

              <div className="relative my-4">
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_1"
                >
                  <img
                    className="w-14 object-contain"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
                    alt=""
                  />
                  <div className="ml-5 flex flex-col justify-center">
                    <span className="font-semibold">Paypal</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Safe money transfer using your bank accounts. Visa,
                      maestro, discover, american express.
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
