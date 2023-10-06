import { Fragment } from "react";
import { iconConfig } from "../icon-config";

export default function Icons() {
  return (
    <div className="text-right">
      {iconConfig.map((icon) => (
        <Fragment key={icon.src}>
          <img src={icon.src} className="inline mr-2" width={icon.width + 15} />
          {icon.lineBreak ? <br /> : null}
        </Fragment>
      ))}
    </div>
  );
}
