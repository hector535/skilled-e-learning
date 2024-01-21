import Image from "next/image";
import { Fade } from "@/components/main/fade";
import { Link } from "@/components/ui/link";

export const Footer = () => {
  return (
    <footer className="bg-navy py-8">
      <Fade
        as="section"
        className="container flex justify-between items-center"
      >
        <Image
          src="/logo-light.svg"
          width="112"
          height="29"
          className="logo"
          alt="Company's logo"
        />

        <Link href="/" color="tertiary" className="xl:px-8">
          Get Started
        </Link>
      </Fade>
    </footer>
  );
};
