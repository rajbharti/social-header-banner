import { useState } from "react";
import Icons from "./components/icons";
import Title from "./components/title";

function App() {
  const [hideTitle, setHideTitle] = useState(false);

  function handleHideTitle(event: React.MouseEvent<HTMLInputElement>) {
    setHideTitle(event.currentTarget.checked);
  }

  return (
    <>
      <div className="my-3 text-center">
        <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Download Image
        </button>
        <label className="ml-5">
          <input type="checkbox" onClick={handleHideTitle} /> Hide Title
        </label>
      </div>
      <div className="flex justify-end gap-x-10 bg-gradient-to-r from-sky-200 to-rose-100 py-12 px-20">
        {!hideTitle && (
          <div className="translate-y-5">
            <Title />
          </div>
        )}
        <Icons />
      </div>
    </>
  );
}

export default App;
