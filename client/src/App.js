import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import BeautifulMain from './views/BeautifulMain'
import BeautifulPost from './views/BeautifulPost'
import BeautifulCreate from './views/BeautifulCreate'
import LogAndReg from './views/LogAndReg'
import { Navbar } from 'react-bootstrap';
import spring from './img/1spring.webp'


function App() {
  return (
    <div className=' min-h-screen bg-cover '
      style={{ backgroundImage: `url(${spring})` }}>

        <nav className="flex items-center justify-between flex-wrap bg-red-300 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">Beautiful People</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link to={`/beauty`} className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4">Home</Link>
              <Link to={`/beautycreate`} className="block  lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4">Create Post</Link>
              <Link to={`/beautypost`} className="block  lg:inline-block lg:mt-0 text-teal-200 hover:text-black mr-4">Show ALL</Link>
            </div>
            <div>
              <Link to={`/LogAndReg`} className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-white  lg:mt-0">Register</Link>
            </div>
          </div>
        </nav>
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
