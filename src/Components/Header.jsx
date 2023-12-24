import React from "react";
import LogOut from "../assets/exit.png";
import { useState, useEffect } from "react";
import auth from '../fireDb'
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

function Header() {
  const [currdate, setCurrDate] = useState("");
  const [currDay, setCurrDay] = useState("");
  const [currTime, setCurrTime] = useState();


// LogOut Function

const LogOutUser=()=>{
signOut(auth).then(()=>{
    toast.success("successfully Logged Out")
}).then((error)=>{
    toast.error(error.message);
})
}


  // get DAte And Day
  useEffect(() => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const dayOfWeek = currentDate.getDay();

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    setCurrDay(daysOfWeek[dayOfWeek]);

    //    console.log(day,month,year);
    setCurrDate(day + "-" + month + "-" + year);
  });

  // get Current Time
  useEffect(() => {
    setInterval(() => {
      const currentDate = new Date();

      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      if (minutes < 10) {
        setCurrTime(hours + ":" + "0" + minutes + ":" + seconds);
      } else {
        setCurrTime(hours + ":" + minutes + ":" + seconds);
      }
    }, 1000);
  }, [currTime]);

  return (
    <div className="bg-teal-700  w-full border-b-2 border-yellow-500  h-[5em] sm:h-[6em] flex items-center justify-between px-6 ">
      <h1 className="font-bold text-4xl">Swift Sell</h1>


    {/* Time Div */}

      <div className=" hidden sm:flex items-center justify-center flex-col gap-2">
        <p className="font-semibold text-3xl"> {currTime}</p>

        <div className="flex justify-center items-center gap-2">
          <p className="font-medium"> {currdate}</p>
          <span>|</span>
          <p className="font-medium">{currDay} </p>
        </div>
      </div>

{/* LogOut Button */}
      <button
        title="LogOut"
        className=" cursor-pointer hover:bg-gray-600 hover:border-2 border-yellow-500 w-[3.6em] h-[3.6em] p-1 rounded-full "
        onClick={LogOutUser}
      >
        <img src={LogOut} alt="" className=" object-cover w-full h-full" />
      </button>
    </div>
  );
}

export default Header;
