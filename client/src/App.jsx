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
import './App.scss';

function App() {
  return (
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
          <Route path='new' element={<DashboardNew />} />
        </Route>
        <Route path='products'>
          <Route index element={<DashboardList />} />
          <Route path=':productId' element={<DashboardSingle />} />
          <Route path='new' element={<DashboardNew />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
