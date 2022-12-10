import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('-1');
  };

  useEffect(() => {
    fetch(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div className="container mx-auto">
      <div className="m-10 border-[1px] border-slate-800 rounded-md py-5 px-7">
        <button onClick={handleBack} className="mb-5 flex items-center hover:text-yellow-600">
          <FiArrowLeft />
          Back
        </button>
        <p className="text-slate-600">
          {item.type}/{item.location}
        </p>
        <h2 className="text-xl text-slate-800 font-bold">{item.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: item.description }} className="mt-10"></div>
      </div>
    </div>
  );
};

export default Details;
