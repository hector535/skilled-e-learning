import { Courses } from "@/containers/courses";
import { Hero } from "@/containers/hero";

export default function Home() {
  return (
    <>
      <Hero className="mt-6 md:mt-[6.56rem] md:mb-[13.125rem] lg:mt-[11.5625rem]" />
      <Courses />
    </>
  );
}
