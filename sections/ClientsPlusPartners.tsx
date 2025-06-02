import Label from "@/components/Label";
import RiotGames from "@/components/SVGs/brands/RiotGames";
import Marvel from "@/components/SVGs/brands/Marvel";
import Blizzard from "@/components/SVGs/brands/Blizzard";
import Honda from "@/components/SVGs/brands/Honda";
import Mercedes from "@/components/SVGs/brands/Mercedes";

import List from "@/components/List";
import ClientsPlusPartnersClient from "@/components/ClientsPlusPartnersClient";

function ClientsPlusPartners() {
  const brands = [
    "Gucci",
    <RiotGames />,
    "Mercedes-Benz",
    <Marvel />,
    "Virgin",
    "Gorillaz",
    "Garena",
    <Mercedes />,
    "Doritos",
    "Estee Lauder",
    "Kenzo",
    "Unilever",
    "Vice",
    "Sanrio",
    "Freeview",
    <Blizzard />,
    "Honda",
    "Channel 4",
    "Ubisoft",
    <Honda />,
    "Azuki",
  ];

  return (
    <section className="bg-off-white pt-[160px] lg:pt-[19.054722vw]">
      <div className="px-2 lg:px-[0.46296vw]">
        <Label>
          <span className="font-[300]">/&nbsp;</span>
          Clients + Partners
        </Label>
        <List className="flex-wrap pt-4 pb-2 text-[32px] leading-none font-[470] tracking-[-0.01em] lg:pt-[0.69444vw] lg:pb-[0.5787vw] lg:text-[3.7037vw] lg:leading-[0.95]">
          {brands}
        </List>
      </div>
      <div className="relative flex aspect-[390/783] items-center justify-center overflow-hidden md:aspect-[390/220] lg:px-[0.46296vw]">
        <div className="h-full w-full bg-red-300"></div>
        <ClientsPlusPartnersClient />
      </div>
    </section>
  );
}

export default ClientsPlusPartners;
