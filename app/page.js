import Image from "next/image";
import Hero from '../components/Landing/Hero'
import Brands from '../components/Landing/Brands'
import ArrivalsProduct from '../components/Landing/ArrivalsProduct'
import FavouritesProducts from '../components/Landing/FavouritesProducts'
import Contact from '../components/Landing/Contact'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Brands/>
      <ArrivalsProduct/>
      <FavouritesProducts/>
      <Image
          alt=""
          src="/assets/banner.png"
          width={1000}
          height={1000}
          className="h-full w-full object-fill"
        />
        <Contact/>
        <Footer/>
    </div>
  );
}
