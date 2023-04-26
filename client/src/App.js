import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import BeautifulMain from './views/BeautifulMain'
import BeautifulPost from './views/BeautifulPost'
import BeautifulCreate from './views/BeautifulCreate'


function App() {
  return (
    <div>

      <Routes>
      <Route path="/" element={<Navigate to="/beauty" replace />} />
      <Route path="/beauty" element={<BeautifulMain />} />
      <Route path="/beautypost" element={<BeautifulPost />} />
      <Route path="/beautycreate" element={<BeautifulCreate />} />

      </Routes>


    </div>
  );
}
export default App;
