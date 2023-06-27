import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();

  return (
    <div className="h-screen flex justify-center">
        <div className="h-screen grid content-center space-y-4">
            <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Log In
            </button>
            <button
            onClick={() =>
                logout({ logoutParams: { returnTo: "https://www.google.com/" } })
            }
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Log Out
            </button>
        </div>
    </div>
  )
};

export default LoginButton;