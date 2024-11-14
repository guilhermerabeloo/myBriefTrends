import './App.css';
import LandingPage from '../components/landingPage';

function App() {
  const cookie = true;

  if(!cookie) {
    return (
      <>
        <div>
          Hello world!
        </div>  
      </>
    )
  } else {
    return (
      <>
        <div id="container">
          <LandingPage /> 
        </div>
      </>
    )
  }

}

export default App