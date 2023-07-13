import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Topics from './pages/Topics';
import Chat from './pages/Chat';
import Empty from './pages/Empty';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Empty />} />
      </Routes>
    </>
  );
}

export default App;
