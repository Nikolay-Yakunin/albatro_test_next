import Image from "next/image";
import humanImage from "@/public/images/Human.svg";
import { Title } from "@/src/shared/ui/Title/Title";

export default function Home() {

  return (
    <div className="w-full h-full box-border">
      <section className="relative inline-flex items-end w-full min-h-[198px] md:min-h-[315px] lg:min-h-[700px]">
        <Title size="lg" className="z-10">Welcome to The NicoTopica.ru my mission is innovation.</Title>
        <div className="absolute right-0 z-0 h-[198px] w-[198px] md:h-[315px] md:w-[198px] lg:h-[700px] lg:w-[440px]">
          <Image src={humanImage} alt="Human" fill priority />
        </div>
      </section>
    </div>
  );
}