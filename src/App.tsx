import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import Creations from "./components/Creations";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import Toast from "./components/Toast";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-cream-50">
        <Navbar />
        <CartSidebar />
        <Toast />
        <Hero />
        <Specialties />
        <Creations />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </CartProvider>
  );
}
