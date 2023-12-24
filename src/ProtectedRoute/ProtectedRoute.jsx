import React, { useEffect ,useState } from "react";
import auth from "../fireDb";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Loader from "../Pages/Loader";

function ProtectedRoute(props) {
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(() => {

    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
      } else {
        SetIsLoading(true);
        setTimeout(() => {

          SetIsLoading(false);
          navigate('/')
        }, 1000);
       
      }
    });
  });


  


  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {});

  return (
    <div>
      <Component />
      <div id="loader" style={{ display: isLoading ? "block" : "none" }}>
            <Loader />
          </div>
    </div>
  );
}

export default ProtectedRoute;
