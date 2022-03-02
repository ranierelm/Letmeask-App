import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { AutoContextProvider } from './contexts/AuthContext'

export default function App() {
  return (
    <BrowserRouter>
      <AutoContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rooms/new" element={<NewRoom />} />
        </Routes>
      </AutoContextProvider>
    </BrowserRouter>
  );
}
