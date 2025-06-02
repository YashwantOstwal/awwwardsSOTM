import ClientsPlusPartners from "@/sections/ClientsPlusPartners";
import News from "@/sections/News";
import Footer from "@/sections/Footer";
import TheStudio from "@/sections/TheStudio";
import Contact from "@/sections/Contact";
import SectionOfSections from "@/sections/SectionOfSections";

export default function Page() {
  return (
    <main>
      <SectionOfSections />
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
