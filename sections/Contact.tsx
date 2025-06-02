import ShowOnDesktop from "@/components/Client/ShowOnDesktop";
import ContactDesktop from "@/components/ContactDesktop";
import ContactMobile from "@/components/ContactMobile";

export default function Contact() {
  return (
    <section className="relative z-20">
      <ContactMobile className="lg:hidden" />
      <ShowOnDesktop>
        <ContactDesktop />
      </ShowOnDesktop>
    </section>
  );
}
