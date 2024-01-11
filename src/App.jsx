import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import StudentSection from "./Components/StudentSection";

function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white ">
      {/* <!-- Navbar Starts --> */}
      <Navbar />

      {/* <!-- Begin hero --> */}
      <Hero />

      {/* <!--Begin Students table --> */}
      <StudentSection />

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default App;
