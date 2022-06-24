import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Hotel,
  List,
  Login,
  DashboardHome,
  DashboardLogin,
  DashboardList,
  DashboardSingle,
  DashboardNew,
} from './pages';
import { productInputs, userInputs } from './formSource';
import { DarkModeContext } from './context/DarkModeContext';
import './App.scss';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/login' element={<Login />} />

        {/* dashboard routes  */}
        <Route path='/dashboard'>
          <Route index element={<DashboardHome />} />
          <Route path='login' element={<DashboardLogin />} />
          <Route path='users'>
            <Route index element={<DashboardList />} />
            <Route path=':userId' element={<DashboardSingle />} />
            <Route
              path='new'
              element={
                <DashboardNew inputs={userInputs} title='Add New User' />
              }
            />
          </Route>
          <Route path='products'>
            <Route index element={<DashboardList />} />
            <Route path=':productId' element={<DashboardSingle />} />
            <Route
              path='new'
              element={
                <DashboardNew inputs={productInputs} title='Add New Product' />
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
