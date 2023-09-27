import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import * as Yup from 'yup';

const LoginForm = ({ setAuthToken }) => {
  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post('https://vector-corp.vercel.app/api/login', values);
      const { token } = response.data;

      setAuthToken(token);
      localStorage.setItem('authToken', token);
    } catch (error) {
      setErrors({ password: 'Invalid email or password' });
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-100 xl:bg-[#f1f2f8] rounded-xl xl:p-14 xl:shadow-sm">
        <h2 className="text-4xl font-bold mb-6">Login</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-3 text-xl">
              <div>
                <label htmlFor="email" className="block">
                  Email:
                </label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full px-4 py-2 rounded appearance-none border-2 border-gray-200 bg-white"
                />
                <ErrorMessage name="email" component="p" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="password" className="block">
                  Password:
                </label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password*"
                  className="w-full px-4 py-2 mb-3 rounded appearance-none border-2 border-gray-200 bg-white"
                />
                <ErrorMessage name="password" component="p" className="text-red-500" />
              </div>
              <button
                type="submit"
                className="w-full bg-[#234d91] text-white px-4 py-2 rounded transition ease-in-out duration-500 font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const AdminDashboard = ({ setAuthToken }) => {
  const handleLogout = () => {
    setAuthToken('');
    localStorage.removeItem('authToken');
  };

  return (
    <div className="h-screen bg-cover bg-[#ffffff] bg-fixed pb-[10%]">
      <div className="px-[10%] mx-[2%] lg:px-[15%] pt-[26%] md:pt-[8%]">
        <div className="w-full flex justify-between">
          <div className="text-4xl lg:text-5xl font-bold my-7">Dashboard</div>
          <button
            className="absolute p-3 bg-red-500 hover:bg-red-700 transition ease-in-out duration-500 text-white rounded-lg font-semibold"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="xl:bg-[#eef0f7] h-min rounded-xl xl:shadow-md xl:p-10">
          <div className="text-lg font-semibold">Files:</div>
          <div className=""><a className="font-bold text-blue-600 hover:text-blue-700 transition ease-in duration-200" href="/VCCHealthandSafety.pdf" target="_blank" rel="noopener noreferrer">VCC Health and Safety</a></div>
        </div>
      </div>
    </div>
  );
};

const GeneralUserDashboard = ({ setAuthToken }) => {
  const handleLogout = () => {
    setAuthToken('');
    localStorage.removeItem('authToken');
  };
  
  return (
    <div className="h-screen bg-cover bg-[#ffffff] bg-fixed pb-[10%]">
      <div className="px-[10%] mx-[2%] lg:px-[15%] pt-[26%] md:pt-[8%]">
        <div className="w-full flex justify-between">
          <div className="text-4xl lg:text-5xl font-bold my-7">Dashboard</div>
          <button
            className="absolute p-3 bg-red-500 hover:bg-red-700 transition ease-in-out duration-500 text-white rounded-lg font-semibold"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="xl:bg-[#eef0f7] h-min rounded-xl xl:shadow-md xl:p-10">
          <div className="text-lg font-semibold">Files:</div>
          <div className=""><a className="font-bold text-blue-600 hover:text-blue-700 transition ease-in duration-200" href="/VCCHealthandSafety.pdf" target="_blank" rel="noopener noreferrer">VCC Health and Safety</a></div>
        </div>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');

    if (storedToken) {
      setAuthToken(storedToken);
    }
  }, []);

  let dashboardComponent;
  if (authToken) {
    const decodedToken = jwt_decode(authToken);
    const userRole = decodedToken ? decodedToken.role : '';

    if (userRole === 'admin') {
      dashboardComponent = <AdminDashboard setAuthToken={setAuthToken} />;
    } else if (userRole === 'general') {
      dashboardComponent = <GeneralUserDashboard setAuthToken={setAuthToken} />;
    }
  }

  return (
    <div>
      {!authToken ? (
        <LoginForm setAuthToken={setAuthToken} />
      ) : (
        <>
          {dashboardComponent}
        </>
      )}
    </div>
  );
};

export default LoginPage;
