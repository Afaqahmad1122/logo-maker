import { useState } from "react";
import BackgoundController from "./components/BackgoundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  return (
    <>
      <Header />

      <div className="w-64 fixed">
        <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        passing
      </div>

      <div className="ml-64 grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-2 h-screen border shadow-sm p-5">
          {selectedIndex == 0 ? <IconController /> : <BackgoundController />}
        </div>
        <div className="md:col-span-3">Icon Preview</div>
        <div>Ads banner</div>
      </div>
    </>
  );
};

export default App;
