import { Course } from "@/components/main/course";
import { Fade } from "@/components/main/fade";
import { cn } from "@/lib/utils";

const courses = [
  {
    title: "Animation",
    content:
      "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
    iconName: "animation",
  },
  {
    title: "Design",
    content:
      "Create beautiful, usable interfaces to help shape the future of how the web looks.",
    iconName: "design",
  },
  {
    title: "Photography",
    content:
      "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
    iconName: "photography",
  },
  {
    title: "Crypto",
    content:
      "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
    iconName: "crypto",
  },
  {
    title: "Business",
    content:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
    iconName: "business",
  },
];

type CoursesProps = {
  className?: string;
};

export const Courses = (props: CoursesProps) => {
  const { className } = props;

  return (
    <section className={cn("bg-main-pattern pb-20", className)}>
      <ul className="container grid gap-10 md:grid-cols-2 md:gap-y-14 md:gap-x-2.5 xl:grid-cols-3 xl:gap-y-20 xl:gap-x-[1.875rem]">
        <Fade as="li" withMargin>
          <div className="h-full p-6 rounded-[0.625rem] bg-secondary-pattern md:p-8 md:pt-14">
            <p className="course-main-title text-white">
              Check out our most popular courses!
            </p>
          </div>
        </Fade>

        {courses.map((course) => (
          <Fade as="li" key={course.title} withMargin>
            <Course {...course} />
          </Fade>
        ))}
      </ul>
    </section>
  );
};
