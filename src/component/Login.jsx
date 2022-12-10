import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { gapi } from 'gapi-script';

const Login = () => {
  const navigate = useNavigate();
  const token = '71817336688-f5jqt48ouslus6qe1oimet06ds6cvm76.apps.googleusercontent.com';
  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));

    navigate('/');
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: token,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  return (
    <div className="flex bg-gray-800 justify-center items-center h-screen">
      <GoogleLogin
        clientId={token}
        render={(renderProps) => (
          <button
            type="button"
            className=" bg-white px-4 py-2 text-base rounded-md flex items-center"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <FcGoogle className="mr-3" size={25} /> Sign in with google
          </button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
