function Hero() {
  return (
    <>
      <div
        className="relative bg-white bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('src/assets/background.png')" }}
      >
        <div className="absolute inset-0 bg-zinc-700 bg-opacity-20"></div>
        <div className="container mx-autp px-6 py-32 flex flex-col items-center justify-center relative z-10">
          <h1 className="text-4xl md:text-6xl text-white font-bold text-center">
            Welcome to E-shop
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-white text-center">
            Your one-stop shop for all things awesome.
          </p>
          <a
            href="/shop"
            className="mt-8 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded hover:bg-blue-700 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
