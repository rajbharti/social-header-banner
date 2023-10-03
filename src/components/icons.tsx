import { iconConfig } from "../icon-config";

export default function Icons() {
  return (
    <div className="text-right">
      {iconConfig.map((icon) => (
        <>
          <img
            key={icon.src}
            src={icon.src}
            width={icon.width + 20}
            className="inline mr-2"
          />
          {icon.lineBreak ? <br /> : null}
        </>
      ))}
    </div>
  );
}
