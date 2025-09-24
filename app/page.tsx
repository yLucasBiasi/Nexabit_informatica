import Image from "next/image";
import Header from "../components/header/header";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import Gallery from "@/components/galery/galery";
import { Reviews } from "@/components/review/review";
import { FAQ } from "@/components/FAQ/FAQ";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";
import WhatsAppButton from "@/components/icon_whastapp/icon_whatsapp";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <Services/>
      <Gallery/>
      <Reviews/>
      <FAQ/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  );
}
