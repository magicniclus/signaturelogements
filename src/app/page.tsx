import Avantages from "@/components/Avantages";
import Charm from "@/components/Charm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Programme from "@/components/Programme";
import Testimonial from "@/components/Testimonial";
import TextWithGlobalBackground from "@/components/TextWithGlobalBackground";

export default function Home() {
  return (
    <>
      <Nav nav={true} />
      <main className="font-typedynamic">
        <Hero />
        <Charm />
        <Programme />
        <TextWithGlobalBackground />
        <Testimonial />
        <Avantages />
      </main>
      <Footer />
    </>
  );
}
