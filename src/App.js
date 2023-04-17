import Navbar from "./components/layout/navbar"
import Landing from "./components/landing/landing"
import Cards from "./components/cards/cards"
import Footer from "./components/layout/footer";
import Speaker from "./components/speaker/speaker";

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Cards/>
      <Speaker/>
      <Footer/>
    </div>  
  );
}

export default App;
