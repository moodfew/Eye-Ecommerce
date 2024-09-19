import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/token");
        const data = await response.json();
        setToken(data.token);
        console.log(token);
      } catch (error) {
        console.log("Error fetching token:", error);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        if (token) {
          const response = await axios.get("http://localhost:3000/api/orders", {
            headers: {
              "x-auth-token": token, // Assuming you store token in localStorage
            },
          });
          setOrders(response.data);
        }
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    };

    fetchOrderHistory();
  }, [token]);

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        <div className="space-y-4">
          {Array.isArray(orders) && orders.length > 0 ? ( // Check if orders is an array
            orders.map((order) => (
              <div key={order.id} className="bg-white shadow-md p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Order ID: {order.id}</h3>
                <p>Total Price: ${order.total_price}</p>
                <p>Status: {order.status}</p>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-screen">
              <h2 className="text-2xl font-semibold mb-4">
                No items in the cart
              </h2>
              <p className="text-gray-600 mb-6">
                It looks like you haven't added any items to your cart yet.
              </p>
              <button
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
