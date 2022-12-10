import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './component/Login';
import Home from './page/Home';
import { fetchUser } from './utils/fetchUser';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUser();

    if (!user) navigate('/login');
  }, [navigate]);
  return (
    <>
      <Routes>
        <Route path="/*" end element={<Home />} />
        <Route path="/login" end element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
