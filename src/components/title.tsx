import clsx from "clsx";
interface TitleProps {
  size: string;
}

export default function Title({ size }: TitleProps) {
  let titleSize = "text-4xl";

  switch (size) {
    case "xs":
    case "s":
      titleSize = "text-3xl";
  }

  return (
    <>
      <h1 className={clsx(titleSize, "font-bold text-blue-800")}>
        RAJ KUMAR BHARTI
      </h1>
      <h2 className="text-xl text-blue-700">Full Stack Web Developer</h2>
    </>
  );
}
