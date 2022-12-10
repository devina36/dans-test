import React from 'react';

const Navbar = ({ data }) => {
  return (
    <nav className=" py-5 bg-slate-800">
      <div className="container mx-auto">
        <div className=" flex justify-between items-center">
          <h1 className="  text-lg text-white">
            Get Your <span className="font-bold ">Jobs</span>
          </h1>
          <div className="flex justify-center items-center gap-x-4 border-l-2 border-white pl-5">
            <img src={data.imageUrl} className="w-9 h-9 rounded-full" alt="profile" />
            <h2 className="text-sm font-medium text-white">{data.name}</h2>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
