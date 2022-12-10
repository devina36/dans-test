import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import CardItem from './CardItem';

const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  useEffect(() => {
    if (location === '' && description === '') {
      fetch(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=${page < 1 ? setPage(1) : page}`)
        .then((res) => res.json())
        .then((data) => setData(data));

      fetch(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json`)
        .then((response) => response.json())
        .then((data) => setCount(Math.ceil(data.length / 10)));
    } else {
      fetch(
        `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}&location=${location}`
      )
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [page, description, location]);

  const handlePageChange = (selectedObject) => {
    setPage(selectedObject.selected + 1);
  };

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex items-center gap-7 justify-center">
          <input
            type="text"
            className="w-4/12 px-3 py-2 border-[1px] border-slate-800 rounded-full"
            placeholder="Filter by description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            className="w-4/12 px-3 py-2 border-[1px] border-slate-800 rounded-full"
            placeholder="Filter by location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              className="border-[1px] border-slate-800 w-5 h-5"
              id="fulltime"
              checked={check}
              onChange={handleCheck}
            />
            <label htmlFor="fulltime">Full-time only</label>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-5">
          {check === true
            ? data
                .filter((data) => data.type === 'Full Time')
                .map((item) => {
                  return <CardItem key={item.id} data={item} />;
                })
            : data.map((item) => {
                return item === null ? '' : <CardItem key={item.id} data={item} />;
              })}
        </div>
        <div className="grid place-content-center mt-10">
          <ReactPaginate
            pageCount={count}
            pageRange={2}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={'contain'}
            previousLinkClassName={'page'}
            breakClassName={'page'}
            nextLinkClassName={'page'}
            pageClassName={'page'}
            disabledClassNae={'disabled'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
