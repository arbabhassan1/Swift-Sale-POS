import React from 'react'
import auth from '../fireDb'
import { signOut } from 'firebase/auth'
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=>{
        signOut(auth);
      }}>SignOut</button>
    </div>
  )
}

export default Home
