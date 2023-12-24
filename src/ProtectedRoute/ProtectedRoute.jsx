import React, { useEffect } from "react";
import auth from "../fireDb";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
  useEffect(() => {

    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
      } else {
        navigate('/')
      }
    });
  });


  


  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {});

  return (
    <div>
      <Component />
    </div>
  );
}

export default ProtectedRoute;
