import { logoConfig } from "../logo-config";

export default function Icons() {
  return (
    <div>
      {logoConfig.map((logoRow, i) => (
        <div key={i.toString()}>
          {logoRow.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              width={logo.width}
              className="inline mr-2"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
