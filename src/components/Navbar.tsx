import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="container px-4 py-4 flex justify-between items-center mx-auto">
          <div className="text-2xl font-bold">
            <a href="/">E-store</a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/shop" className="text-gray-600 hover:text-gray-900">
              Shop
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
          <div className="cart space-x-4">
            <a href="/cart" className="text-gray-600 hover:text-gray-900">
              <FaShoppingCart size={24} />
            </a>
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
