import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ProjectOne from './pages/ProjectOne';
import ProjectTwo from './pages/ProjectTwo';
import Contact from './pages/Contact';


import Landing from './pages/Landing';



function App() {

  return (
    <>

      <Header />

      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="ProjectOne" element={<ProjectOne />} />
          <Route path="ProjectTwo" element={<ProjectTwo />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App