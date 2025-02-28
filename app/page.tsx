import Image from "next/image";
import humanImage from "@/public/images/Human.svg";
import { Title } from "@/src/shared/ui/Title/Title";

export default function Home() {
  return (
    <section className="flex items-end">
      <Title size="lg" className="">Welcome to The NicoTopoca.ru my<br />mission is innovation.</Title>
      <Image src={humanImage} alt="Human" priority />
    </section>
  );
}
