import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/shop?search=${searchQuery}`);
    }
  };

  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="container px-4 py-4 flex justify-between items-center mx-auto">
          <div className="text-2xl font-bold">
            <Link to="/">E-store</Link>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
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
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-900 rounded-md"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-600 hover:text-gray-900 py-2 px-4 rounded-md"
            >
              Register
            </Link>
          </div>
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-2 px-4 mr-2 border border-gray-300 focus:outline-none rounded-md"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Search
            </button>
          </form>
          <div className="cart hidden lg:block space-x-4">
            <Link to="/cart" className="text-gray-600 hover:text-gray-900">
              <FaShoppingCart size={24} />
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 focus:outline-none focus:text-gray-900"
            >
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
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 px-4 pb-4">
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
              <Link to="/cart" className="text-gray-600 hover:text-gray-900">
                Cart
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
