import Charm from "@/components/Charm";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Charm />
      </main>
    </>
  );
}
