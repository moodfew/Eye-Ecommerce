import Navbar from "./Navbar";
import Banner from "./Banner";

function Home() {
  return (
    <div
      className="relative h-screen"
      style={{
        backgroundImage: "url('/background.png')", // Ensure this path is correct
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      {/* Adjust opacity as needed */}
      <div className="relative z-20">
        <Banner />
      </div>
    </div>
  );
}

export default Home;
