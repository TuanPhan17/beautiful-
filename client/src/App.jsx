import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import BeautifulMain from './views/BeautifulMain'
import BeautifulPost from './views/BeautifulPost'
import BeautifulCreate from './views/BeautifulCreate'
import LogAndReg from './views/LogAndReg'
import { Navbar } from 'react-bootstrap';


function App() {
  return (
    <div>
      <Navbar  className='d-flex  justify-content-between bg-red-300'>
        <Link to={`/beauty`}>HOME</Link>
        <Link to={`/beautycreate`}>Create BLog</Link>
        <Link to={`/LogAndReg`}>Login</Link>
        <Link to={`/beautypost`}>show ALL </Link>
        

      </Navbar>
          <Routes>
            <Route path="/" element={<Navigate to="/beauty" replace />} />
            <Route path="/beauty" element={<BeautifulMain />} />
            <Route path="/beautypost" element={<BeautifulPost />} />
            <Route path="/beautycreate" element={<BeautifulCreate />} />
            <Route path="/LogAndReg" element={<LogAndReg />} />

          </Routes>


        </div>
        );
}
        export default App;
