import { useState } from "react";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import Icons from "./components/icons";
import Title from "./components/title";

const sizeOptions: readonly [string, string][] = [
  ["Extra Small", "xs"],
  ["Small", "s"],
  ["Regular", "r"],
];

interface ControlProps {
  handleDownloadImage: () => void;
  handleHideTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSizeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size: string;
}

function Control({
  handleDownloadImage,
  handleHideTitle,
  handleSizeChange,
  size,
}: ControlProps) {
  return (
    <div className="my-5 text-center">
      <button
        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-3xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={handleDownloadImage}
      >
        Download Image
      </button>
      <label className="ml-5">
        <input type="checkbox" onChange={handleHideTitle} /> Hide Title
      </label>
      <div className="mt-5">
        <span className="font-bold">Size:</span>
        {sizeOptions.map((item) => (
          <label className="ml-2" key={item[0]}>
            <input
              type="radio"
              name="size"
              value={item[1]}
              checked={size === item[1]}
              onChange={handleSizeChange}
            />{" "}
            {item[0]}
          </label>
        ))}
      </div>
    </div>
  );
}

interface BannerProps {
  hideTitle: boolean;
  size: string;
}

function Banner({ hideTitle, size }: BannerProps) {
  return (
    <div id="social-header-banner">
      <div className="flex justify-end gap-x-10 bg-gradient-to-r from-sky-200 to-rose-100 p-20">
        {!hideTitle && (
          <div className="translate-y-5">
            <Title size={size} />
          </div>
        )}
        <Icons size={size} />
      </div>
    </div>
  );
}

function App() {
  const [hideTitle, setHideTitle] = useState(false);
  const [size, setSize] = useState("r");

  function handleDownloadImage() {
    const node = document.getElementById(
      "social-header-banner"
    ) as HTMLDivElement;
    toPng(node)
      .then((dataUrl) => {
        saveAs(
          dataUrl,
          !hideTitle
            ? `banner-with-title-${size}.png`
            : `banner-without-title-${size}.png`
        );
      })
      .catch(function (error) {
        console.error("Oops, something went wrong!", error);
      });
  }

  function handleHideTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setHideTitle(event.currentTarget.checked);
  }

  function handleSizeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSize(event.currentTarget.value);
  }

  return (
    <>
      <Control
        handleDownloadImage={handleDownloadImage}
        handleHideTitle={handleHideTitle}
        handleSizeChange={handleSizeChange}
        size={size}
      />
      <Banner hideTitle={hideTitle} size={size} />
    </>
  );
}

export default App;
