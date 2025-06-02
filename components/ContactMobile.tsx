import CallToAction from "@/components/Server/CallToAction";
import ClosingLogoBlock from "./ClosingLogoBlock";
import { cn } from "@/utils/cn";

export default function ContactMobile({ className }: { className?: string }) {
  return (
    <div className={cn("bg-off-white", className)}>
      <CallToAction />
      <ClosingLogoBlock />
    </div>
  );
}
