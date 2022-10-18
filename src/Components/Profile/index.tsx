import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogOutBTN from "../Logout";


  
const Profile = () => {
    const { user , isAuthenticated , isLoading }: any = useAuth0();

    if(isLoading){
        return<div>loading...</div>
    }
  
    return (
      isAuthenticated && (
        <div>
            <img src={ user.picture } alt={ user.name } />
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <LogOutBTN />
        </div>
      )
    )
  }
  
  export default Profile;