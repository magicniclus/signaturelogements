import Charm from "@/components/Charm";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Programme from "@/components/Programme";
import Testimonial from "@/components/Testimonial";
import TextWithGlobalBackground from "@/components/TextWithGlobalBackground";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Charm />
        <Programme />
        <TextWithGlobalBackground />
        <Testimonial />
      </main>
    </>
  );
}
