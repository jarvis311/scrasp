import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { Container } from 'react-bootstrap';
import ScrapVehicles from './Components/ScrapVehicles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container>
        {/* Same as */}
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<ScrapVehicles />} />
          <Route path="/show" element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
