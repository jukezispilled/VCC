import React, { useContext } from 'react';
import Dashboard from './Dashboard';
import { AuthContext } from './authcontext';
import { useAuth0 } from '@auth0/auth0-react';

const Lb = () => {
  const { isAuthenticated, loginWithRedirect } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <div className="h-screen grid content-center space-y-4 bg-[#ffffff]">
          <h1 className="flex justify-center text-xl md:text-3xl lg:text-5xl font-semibold">Login to access the Dashboard</h1>
          <div className='flex justify-center'>
            <button onClick={() => loginWithRedirect()} className="bg-slate-200 hover:bg-slate-300 transition duration-200 ease-in p-2 rounded-lg font-semibold md:text-lg lg:text-xl">Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lb;
