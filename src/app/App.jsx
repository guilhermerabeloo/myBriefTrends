import LandingPage from '../components/landingPage';
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const cookie = false;
  const navigate = useNavigate();

  if(!cookie) {
    navigate('/landingpage');
    console.log('oi')
    return (
      <LandingPage />
    )
  } else {
    return (
      <>
        <div id="container">
          <Outlet /> 
        </div>
      </>
    )
  }

}

export default App