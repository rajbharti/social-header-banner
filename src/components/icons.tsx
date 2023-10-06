import { Fragment } from "react";
import { iconConfig } from "../icon-config";

interface IconsProps {
  size: string;
}

export default function Icons({ size }: IconsProps) {
  let iconSize = 15;

  switch (size) {
    case "xs":
      iconSize = 5;
      break;
    case "s":
      iconSize = 10;
      break;
  }

  return (
    <div className="text-right">
      {iconConfig.map((icon) => (
        <Fragment key={icon.src}>
          <img
            src={icon.src}
            className="inline mr-2"
            width={icon.width + iconSize}
          />
          {icon.lineBreak ? <br /> : null}
        </Fragment>
      ))}
    </div>
  );
}
