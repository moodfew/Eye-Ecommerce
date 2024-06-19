import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div
      className="relative h-screen"
      style={{
        backgroundImage: "url('/src/assets/background.png')", // Ensure this path is correct
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="absolute inset-0 "></div> {/* Adjust opacity as needed */}
      <div className="relative z-10">
        <Banner />
      </div>
    </div>
  );
}

export default App;
