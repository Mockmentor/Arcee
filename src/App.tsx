import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Topics from './pages/Topics';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Topics />} />
      </Routes>
    </>
  );
}

export default App;
