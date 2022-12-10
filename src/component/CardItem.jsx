import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = ({ data }) => {
  return (
    <div className="max-w-[330px] w-full px-5 py-4 border-[1px] border-slate-800 rounded-md">
      <Link to={`/detail/${data.id}`}>
        <h2 className=" truncate font-semibold text-slate-800 text-lg hover:text-yellow-600">
          {data.title.split(' ').slice(0, 4).join(' ')}
        </h2>
      </Link>
      <h3 className=" text-slate-600">
        {data.company.split(' ').slice(0, 2).join(' ')}-<span className=" text-yellow-600">{data.type}</span>
      </h3>
      <h4>
        {data.location}, {Date(data.created_at).split(' ').slice(0, 4).join(' ')}
      </h4>
    </div>
  );
};

export default CardItem;
