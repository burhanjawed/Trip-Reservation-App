import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
  DashboardNewHotel,
  DashboardNewRoom,
} from './pages';
import { hotelInputs, productInputs, userInputs } from './formSource';
import { DarkModeContext } from './context/DarkModeContext';
import './App.scss';
import { AuthContext } from './context/AuthContext';
import { hotelColumns, roomColumns, userColumns } from './datatablesource';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to='/dashboard/login' />;
    } else if (!user.isAdmin) {
      return <Navigate to='/' />;
    }

    return children;
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/login' element={<Login />} />

        {/* dashboard routes  */}
        <Route path='/dashboard'>
          <Route path='login' element={<DashboardLogin />} />
          <Route
            index
            element={
              <ProtectedRoute>
                <DashboardHome />
              </ProtectedRoute>
            }
          />
          <Route path='users'>
            <Route
              index
              element={
                <ProtectedRoute>
                  <DashboardList columns={userColumns} title='Users' />
                </ProtectedRoute>
              }
            />
            <Route
              path=':userId'
              element={
                <ProtectedRoute>
                  <DashboardSingle />
                </ProtectedRoute>
              }
            />
            <Route path='new' element={<DashboardNew inputs={userInputs} />} />
          </Route>
          <Route path='hotels'>
            <Route
              index
              element={
                <ProtectedRoute>
                  <DashboardList columns={hotelColumns} title='Hotels' />
                </ProtectedRoute>
              }
            />
            <Route
              path=':hotelId'
              element={
                <ProtectedRoute>
                  <DashboardSingle />
                </ProtectedRoute>
              }
            />
            <Route path='new' element={<DashboardNewHotel />} />
          </Route>
          <Route path='rooms'>
            <Route
              index
              element={
                <ProtectedRoute>
                  <DashboardList columns={roomColumns} title='Rooms' />
                </ProtectedRoute>
              }
            />
            <Route
              path=':roomId'
              element={
                <ProtectedRoute>
                  <DashboardSingle />
                </ProtectedRoute>
              }
            />
            <Route path='new' element={<DashboardNewRoom />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
