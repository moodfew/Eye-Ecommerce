import "./Banner.css"; // Create this file for custom styles

const Banner = () => {
  const mainImage =
    "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const menImage =
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const accessoriesImage =
    "https://images.unsplash.com/3/www.madebyvadim.com.jpg?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="container  mx-auto max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl py-10 px-4">
      {/* Main Carousel */}
      <div className="relative rounded-lg overflow-hidden shadow-lg mb-6">
        <img
          src={mainImage}
          alt="Main Slide"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[70vh] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            Welcome to E-Shop
          </h2>
          <p className="text-md md:text-xl mb-8 text-center">
            Your one-stop shop for all things awesome.
          </p>
          <a
            href="/shop"
            className="px-6 py-2 bg-orange-300 text-md font-semibold rounded hover:bg-orange-400 transition"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Two Side-by-Side Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={menImage}
            alt="Men's Collection"
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">
              Men's Collection
            </h2>
            <a
              href="/men"
              className="px-4 py-2 bg-orange-300 text-sm font-semibold rounded hover:bg-orange-400 transition"
            >
              Shop Men
            </a>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <img
            src={accessoriesImage}
            alt="Accessories"
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">
              Accessories
            </h2>
            <a
              href="/accessories"
              className="px-4 py-2 bg-orange-300 text-sm font-semibold rounded hover:bg-orange-400 transition"
            >
              Shop Accessories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
