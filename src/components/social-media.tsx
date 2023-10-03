import clsx from "clsx";
import Icons from "./icons";

interface SocialMediaProps {
  title: string;
  width: number;
}

export default function SocialMedia({ title, width }: SocialMediaProps) {
  return (
    <div className={clsx(`w-[${width}px]`, "p-4")}>
      <h2 className="mb-2">{title}</h2>
      <div className="relative bg-gradient-to-r from-violet-50 to-violet-200 pr-6">
        <Icons />
      </div>
    </div>
  );
}
