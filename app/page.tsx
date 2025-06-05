import ClientsPlusPartners from "@/sections/ClientsPlusPartners";
import News from "@/sections/News";
import Footer from "@/sections/Footer";
import TheStudio from "@/sections/TheStudio";
import Contact from "@/sections/Contact";
import Group from "@/sections/Group";

export default function Page() {
  return (
    <main>
      <div className="h-screen"></div>
      <Group />
      <TheStudio />
      <ClientsPlusPartners />
      <div className="relative overflow-clip bg-flare-red">
        <News />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
