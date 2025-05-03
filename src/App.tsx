import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import OrganizationPage from './pages/OrganizationPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/galeri" element={<GalleryPage />} />
          <Route path="/struktur" element={<OrganizationPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/event" element={<EventsPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
