import Charm from "@/components/Charm";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Programme from "@/components/Programme";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Charm />
        <Programme />
      </main>
    </>
  );
}
