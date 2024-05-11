import { useState } from "react";
import BackgoundController from "./components/BackgoundController";
import Header from "./components/Header";
import IconController from "./components/IconController";
import SideNav from "./components/SideNav";
import IconPreview from "./components/IconPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  const [updateStorage, setUpdateStorage] = useState({});
  return (
    <>
      <UpdateStorageContext.Provider
        value={{ updateStorage, setUpdateStorage }}
      >
        <Header />

        <div className="w-64 fixed">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>

        <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
          <div className="md:col-span-2 h-screen border shadow-sm p-5 overflow-auto">
            {selectedIndex == 0 ? <IconController /> : <BackgoundController />}
          </div>
          <div className="md:col-span-3">
            <IconPreview />
          </div>
          <div className="bg-red-200">Ads banner</div>
        </div>
      </UpdateStorageContext.Provider>
    </>
  );
};

export default App;
