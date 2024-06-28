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
        const response = await axios.get("http://localhost:3000/api/orders", {
          headers: {
            "x-auth-token": token, // Assuming you store token in localStorage
          },
        });
        setOrders(response.data);
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
          {orders.map((order) => (
            <div key={order.id} className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Order ID: {order.id}</h3>
              <p>Total Price: ${order.total_price}</p>
              <p>Status: {order.status}</p>
              {/* Additional order details can be displayed here */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
