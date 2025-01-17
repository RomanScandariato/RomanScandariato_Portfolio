import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';


import Landing from './pages/Landing';



function App() {

  return (
    <>

      <Header />

      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App