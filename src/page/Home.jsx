import React from 'react';
import Navbar from '../component/Navbar';
import Main from '../component/Main';
import Details from './Details';
import { Routes, Route } from 'react-router-dom';

const Home = () => {
  const getdata = JSON.parse(localStorage.getItem('user')) || '';

  return (
    <>
      <Navbar data={getdata} />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default Home;
