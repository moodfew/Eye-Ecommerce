import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import { useState } from "react";

function Shop() {
  const [menClothing, setManClothing] = useState([]);

  return (
    <>
      <Navbar />
      <div className=" mx-auto h-full flex w-full justify-center items-center m-10  p-2 px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/*  */}
          <div className="relative bg-white border rounded-lg shadow-md dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
              24
            </div>
            <div className="p-2 flex justify-center">
              <a href="#">
                <img
                  className="rounded-md"
                  src="https://tailwindflex.com/public/images/thumbnails/coming-soon-page/thumb_u.min.webp"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="px-4 pb-3">
              <div>
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight hover:text-gray-700 text-gray-600 ">
                    Card ★★★★
                  </h5>
                </a>

                <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                  A card component
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="relative bg-white border rounded-lg shadow-md dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
              24
            </div>
            <div className="p-2 flex justify-center">
              <a href="#">
                <img
                  className="rounded-md"
                  src="https://tailwindflex.com/public/images/thumbnails/coming-soon-page/thumb_u.min.webp"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="px-4 pb-3">
              <div>
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight hover:text-gray-700 text-gray-600 ">
                    Card ★★★★
                  </h5>
                </a>

                <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                  A card component
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="relative bg-white border rounded-lg shadow-md dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
              24
            </div>
            <div className="p-2 flex justify-center">
              <a href="#">
                <img
                  className="rounded-md"
                  src="https://tailwindflex.com/public/images/thumbnails/coming-soon-page/thumb_u.min.webp"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="px-4 pb-3">
              <div>
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight hover:text-gray-700 text-gray-600 ">
                    Card ★★★★
                  </h5>
                </a>

                <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                  A card component
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="relative bg-white border rounded-lg shadow-md dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
              24
            </div>
            <div className="p-2 flex justify-center">
              <a href="#">
                <img
                  className="rounded-md"
                  src="https://tailwindflex.com/public/images/thumbnails/coming-soon-page/thumb_u.min.webp"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="px-4 pb-3">
              <div>
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight hover:text-gray-700 text-gray-600 ">
                    Card ★★★★
                  </h5>
                </a>

                <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                  A card component
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default Shop;
