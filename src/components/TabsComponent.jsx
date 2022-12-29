import { useState } from "react";

const TabsComponent = ({ match }) => {
  const [openTab, setOpenTab] = useState("overview");

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center ">
          <ul className="flex items-center justify-evenly  space-x-2 border-b border-b-slate-600 w-full ">
            <li>
              <a
                href="#"
                onClick={() => setOpenTab("overview")}
                style={{ textTransform: "uppercase" }}
                className={` ${
                  openTab === "overview"
                    ? "border-b-purple-600 border-b-4 text-white"
                    : "text-gray-600"
                } inline-block px-4 py-4  hover:text-white text-xs font-medium font-spartan tracking-widest shadow`}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpenTab("structure")}
                style={{ textTransform: "uppercase" }}
                className={` ${
                  openTab === "structure"
                    ? "border-b-purple-600 border-b-4 text-white"
                    : " text-gray-600"
                } inline-block px-4 py-4 text-xs hover:text-white font-medium  font-spartan tracking-widest  shadow`}
              >
                Structure
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpenTab("surface")}
                style={{ textTransform: "uppercase" }}
                className={` ${
                  openTab === "surface"
                    ? "border-b-purple-600 border-b-4 text-white"
                    : "text-gray-600"
                } inline-block px-4 py-4  hover:text-white text-xs font-medium font-spartan tracking-widest  shadow`}
              >
                Surface
              </a>
            </li>
          </ul>
          <div className="p-3 mt-6">
            <div className={openTab === "overview" ? "block" : "hidden"}>
              <div className="container mx-auto">
                <img
                  src="../src/assets/planet-earth.svg"
                  alt=""
                  className="w-auto"
                />
              </div>
            </div>
            <div className={openTab === "structure" ? "block" : "hidden"}>
              structure xx
            </div>
            <div className={openTab === "surface" ? "block" : "hidden"}>
              surface xx
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabsComponent;
