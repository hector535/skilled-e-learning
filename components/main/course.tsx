import Image from "next/image";

type CourseProps = {
  title: string;
  content: string;
  iconName: string;
};

export const Course = (props: CourseProps) => {
  const { title, content, iconName } = props;

  return (
    <div className="relative grid gap-4 grid-rows-[auto_auto_1fr] h-full p-7 pt-14 bg-white rounded-[0.625rem] shadow-course-card md:p-8 md:pt-14 xl:pt-16">
      <Image
        src={`/icon-${iconName}.svg`}
        width="56"
        height="56"
        alt=""
        className="absolute top-0 left-7 translate-y-[-50%]"
      />
      <h1 className="course-title text-navy">{title}</h1>
      <p>{content}</p>

      <a
        className="inline-block course-cta transition-colors text-dark-pink justify-self-start self-end mt-2 hover:text-soft-pink"
        href="/"
      >
        Get Started
      </a>
    </div>
  );
};
