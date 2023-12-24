import React, { useEffect, useState } from "react";
import Splash from "../assets/splash.svg";
import Logo from "../assets/logo.png";
import { toast } from "react-toastify";
import Loader from "./Loader";
import auth from "../fireDb";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
function Index() {
  const [email, setEmail] = useState("");
  const [isLoading, SetIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  // User Login Function

  const LoginUser = () => {
    if (email == "" || password == "") {
      toast.error("Please Enter Email & Password.");
    } else {
      SetIsLoading(true);

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Login successful!");
         
          setTimeout(() => {
            navigate('/home');
            SetIsLoading(false);
          }, 3000);
         
        })
        .catch((error) => {
          toast.error(error.message);
          SetIsLoading(false);
        });

        setEmail('');
        setPassword('');
    }
  };

  // Internet Connection

  return (
    <div className="bg-slate-900 text-[#eee] min-h-screen w-full h-full flex items-center justify-center ">
      {/* Only Large Screen */}
      <div className="w-[50%] bg-teal-700 h-screen  hidden sm:flex items-center justify-center flex-col gap-2">
        <img
          src={Splash}
          alt="IMG"
          className="w-[70%] h-fit object-cover  rounded-full"
        />

        <h1 className="font-bold text-4xl">Swift Sell</h1>
        <p className=" text-center text-sm">
          Your Point of Sale, Our Point of Excellence!
        </p>

        <p className="text-center mt-10">
          A Project by{" "}
          <a
            href="https://arbabhassan.bio.link/"
            target="_blank"
            className="font-semibold "
          >
            Arbab Hassan
          </a>
        </p>
      </div>

      {/* For All Screen */}
      <div className="w-full sm:w-[50%] h-screen flex items-center justify-center flex-col gap-2">
        <img src={Logo} alt="Logo" className="sm:w-[30%] w-[40%]" />
        <h1 className="font-bold text-4xl poppins mt-8 mb-6">Login</h1>

        <input
          type="Email"
          placeholder="Email"
          value={email}
          className="w-[80%] sm:w-[50%] px-2 py-2 rounded-md text-black border-2 border-yellow-500"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-[80%] sm:w-[50%] px-2 py-2 rounded-md text-black border-2 border-yellow-500"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          type="button"
          className="w-[80%] sm:w-[50%] mt-2 bg-teal-600 hover:bg-teal-700 rounded-md text-2xl font-semibold py-1"
          onClick={LoginUser}
        >
          Login
        </button>

        <p className="text-center mt-8 sm:hidden">
          A Project by{" "}
          <a
            href="https://arbabhassan.bio.link/"
            target="_blank"
            className="font-semibold "
          >
            Arbab Hassan
          </a>
        </p>
      </div>

      <div id="loader" style={{ display: isLoading ? "block" : "none" }}>
        <Loader />
      </div>
    </div>
  );
}

export default Index;
