import { Divider } from "@mui/material";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <Contact />
      <Divider/>
      <Footer />
    </>
  );
};

export default App;
