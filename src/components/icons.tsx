import { iconConfig } from "../icon-config";

export default function Icons() {
  return (
    <div className="text-right">
      {iconConfig.map((icon, i) => (
        <div key={i.toString()}>
          <img
            key={icon.src}
            src={icon.src}
            width={icon.width}
            className="inline-block mr-2 -mt-1"
          />
        </div>
      ))}
    </div>
  );
}
