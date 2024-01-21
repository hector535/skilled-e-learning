import { Fade } from "@/components/main/fade";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

type HeroProps = {
  className?: string;
};

export const Hero = (props: HeroProps) => {
  const { className } = props;

  return (
    <Fade
      as="section"
      className={cn("container relative", className)}
      withMargin
    >
      <div className="space-y-6 md:w-[62%] xl:space-y-8 xl:w-[45%]">
        <h1 className="hero-title text-navy ">
          Maximize skill, minimize budget
        </h1>
        <p>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>

        <Link href="/" color="secondary" size="large" className="px-10 xl:px-9">
          Get started
        </Link>
      </div>

      <picture className="flex justify-center">
        <source
          media="(min-width: 1920px)"
          srcSet="/image-hero-desktop@2x.webp"
          width={2092}
          height={1876}
        />
        <source
          media="(min-width: 1920px)"
          srcSet="/image-hero-desktop@2x.png"
          width={2092}
          height={1876}
        />
        <source
          media="(min-width: 1536px)"
          srcSet="/image-hero-desktop.webp"
          width={1046}
          height={938}
        />
        <source
          media="(min-width: 1536px)"
          srcSet="/image-hero-desktop.png"
          width={1046}
          height={938}
        />

        <source
          media="(min-width: 1280px)"
          srcSet="/image-hero-tablet@2x.webp"
          width={1390}
          height={1446}
        />
        <source
          media="(min-width: 1280px)"
          srcSet="/image-hero-tablet@2x.png"
          width={1390}
          height={1446}
        />
        <source
          media="(min-width: 768px)"
          srcSet="/image-hero-tablet.webp"
          width={695}
          height={723}
        />
        <source
          media="(min-width: 768px)"
          srcSet="/image-hero-tablet.png"
          width={695}
          height={723}
        />

        <source
          media="(min-width: 640px)"
          srcSet="/image-hero-mobile@2x.webp"
          width={870}
          height={818}
        />
        <source
          media="(min-width: 640px)"
          srcSet="/image-hero-mobile@2x.png"
          width={870}
          height={818}
        />
        <source srcSet="/image-hero-mobile.webp" width={435} height={409} />
        <img
          className="md:absolute md:top-[-270px] md:right-[-320px] lg:top-[-265px] lg:right-[-290px] xl:w-[925px] xl:h-[962px] xl:top-[-380px] xl:right-[-450px] 2xl:w-auto 2xl:h-auto 2xl:top-[-420px] 2xl:right-[-500px] 3xl:right-[-550px]"
          src="/image-hero-mobile.png"
          alt="Woman drinking coffee while working on her laptop."
          width={435}
          height={409}
        />
      </picture>
    </Fade>
  );
};
