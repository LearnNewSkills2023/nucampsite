import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage.js'
import CampsiteDetailPage from './pages/CampsiteDetailPage.js'
import AboutPage from './pages/AboutPage.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route path='/' element ={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route
        path='directory/:campsiteId'
        element={<CampsiteDetailPage/>} 
        />
      </Routes>     
      <CampsitesDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
