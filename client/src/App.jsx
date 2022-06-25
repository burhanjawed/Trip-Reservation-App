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
} from './pages';
import { hotelInputs, productInputs, userInputs } from './formSource';
import { DarkModeContext } from './context/DarkModeContext';
import './App.scss';
import { AuthContext } from './context/AuthContext';
import { hotelColumns, userColumns } from './datatablesource';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to='/dashboard/login' />;
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
                  <DashboardList columns={userColumns} title='Add New User' />
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
            <Route
              path='new'
              element={
                <DashboardNew inputs={userInputs} title='Add New User' />
              }
            />
          </Route>
          <Route path='hotels'>
            <Route
              index
              element={
                <ProtectedRoute>
                  <DashboardList columns={hotelColumns} title='Add New Hotel' />
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
            <Route
              path='new'
              element={
                <DashboardNew inputs={hotelInputs} title='Add New Hotel' />
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
