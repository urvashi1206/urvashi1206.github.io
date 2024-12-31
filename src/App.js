
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import Header from './Components/Header';
import Hero from './Components/Hero';
import Main from './Components/Main';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';

AOS.init();

function App() {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      {/* Global Background */}
      <div className="fixed inset-0 -z-10 bg-hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-80"></div>
      </div>

      {/* Sections */}
      <Header />
      <Hero />
      <Main />
    </div>
  );
}



export default App;
