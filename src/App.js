import "./App.css";
import {Navbar,Hero, Tech,Works, Contact, About} from "./components"
import  StarsCanvas  from "./components/canvas/Stars";

function App() {
  return (
    <div className="relative z-0 bg-primary overflow-hidden">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">

        <Navbar/>
        <Hero/>



      </div>
      <About/>
      
      <Tech/>
      <Works/>
   
      <div className="relative z-0">

        <Contact/>
        <StarsCanvas/>

      </div>

    </div>
  );
}

export default App;
