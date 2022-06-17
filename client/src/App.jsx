import { Routes, Route } from 'react-router-dom';
import { Home, Hotel, List, Login } from './pages';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotels' element={<List />} />
      <Route path='/hotels/:id' element={<Hotel />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
