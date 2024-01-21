import Image from "next/image";
import { Link } from "@/components/ui/link";
import { Fade } from "@/components/main/fade";

export const Header = () => {
  return (
    <Fade
      as="header"
      className="container flex items-center justify-between py-4 md:py-6"
    >
      <Image
        src="./logo-dark.svg"
        className="logo"
        alt="Company's logo"
        width="112"
        height="29"
        priority
      />
      <Link href="/" color="primary" className="xl:px-8">
        Get Started
      </Link>
    </Fade>
  );
};
