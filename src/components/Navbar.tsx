import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="container px-4 py-4 flex justify-between items-center mx-auto">
          <div className="text-2xl font-bold">
            <Link to="/">E-store</Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-gray-900">
              Shop
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
          <div className="cart space-x-4">
            <Link to="/cart" className="text-gray-600 hover:text-gray-900">
              <FaShoppingCart size={24} />
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none focus:text-gray-900">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
