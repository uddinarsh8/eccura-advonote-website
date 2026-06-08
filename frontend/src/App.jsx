import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/demo"
          element={<Demo />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <Link to="/">
        Home
      </Link>

      <Link to="/contact">
        Contact
      </Link>

      <Link to="/demo">
        Demo
      </Link>

    </nav>
  );
}

export default Navbar;
function Hero() {

 return (

  <section>

   <h1>
    Transform Legal Practice
   </h1>

   <p>
    Smart Case Management
   </p>

  </section>

 );

}

export default Hero;
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home(){

 return(

  <>
   <Navbar />
   <Hero />
  </>

 );

}

export default Home;