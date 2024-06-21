import React from "react";
import Navbar from "./Navbar";

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="container mx-auto px-8 py-8 lg:py-20">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 lg:text-4xl">
          About Us
        </h2>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-gray-500 mt-2 lg:w-5/12">
          Explore our latest accomplishments and milestones in the world of
          men's fashion.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
            <img
              src="https://bucket.material-tailwind.com/magic-ai/58b51625af5803baea7811b7e9128c8b23c0706c3271fa863b6bc287c2d3958a.jpg"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Stylish New Collections
              </h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2">
                Discover our latest stylish collections that redefine men's
                fashion trends. From casual wear to formal attire, we have
                something for every occasion.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
            <img
              src="https://bucket.material-tailwind.com/magic-ai/36e7d64250cd9568062f658a26b4d0107c00235cb3b85fa4919b3ba4070c9bed.jpg"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Limited Edition Releases
              </h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2">
                Explore our exclusive limited edition releases crafted with
                premium materials and exquisite craftsmanship. Don't miss out on
                these unique pieces.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
            <img
              src="https://bucket.material-tailwind.com/magic-ai/36e7d64250cd9568062f658a26b4d0107c00235cb3b85fa4919b3ba4070c9bed.jpg"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Customer Satisfaction
              </h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2">
                Our commitment to customer satisfaction is reflected in every
                product we offer. Read customer testimonials and reviews to
                learn about their shopping experiences with us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
