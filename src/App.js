import Navbar from "./components/layout/navbar"
import Landing from "./components/landing/landing"
import Cards from "./components/cards/cards"
import Navbar from "./components/layout/navbar";
import Landing from "./components/landing/landing";
import Footer from "./components/layout/footer";
import Speaker from "./components/speaker/speaker";

function App() {
  return (
    <div>
      <Navbar/>
      <Speaker/>
      <Landing/>
      <Cards/>
      <Footer/>
    </div>  
  );
}

export default App;
