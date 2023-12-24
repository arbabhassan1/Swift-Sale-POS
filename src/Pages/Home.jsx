import React, { useEffect, useState } from "react";
import auth from "../fireDb";
import { signOut } from "firebase/auth";
import Loader from "./Loader";
import { Offline, Online } from "react-detect-offline";
import offlineIMG from "../assets/offline.png";

import Header from '../Components/Header'

function Home() {
  const [isLoading, SetIsLoading] = useState(false);

  // Loading Effect on Initial

  useEffect(() => {
    SetIsLoading(true);
    setTimeout(() => {
      SetIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Online>
        <div className="bg-slate-900 w-full h-full min-h-screen  text-[#eee]">
         <Header/>

          {/* Loader Div */}
            <div id="loader" style={{ display: isLoading ? "block" : "none" }}>
              <Loader />
            </div>
        </div>
      </Online>
      <Offline>
        <div className="w-full h-screen bg-slate-900 text-[#eee] flex items-center justify-center gap-4 flex-col">
          <img src={offlineIMG} alt="Offline" className="sm:w-[30%] w-[50%]" />
          <h1 className="font-bold text-3xl">No Connection</h1>
          <h1 className="text-center font-semibold ">
            Please Check your internet connection
          </h1>
        </div>
      </Offline>
    </>
  );
}

export default Home;
