import './App.css';
import { Outlet } from 'react-router-dom';

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
          <Outlet /> 
        </div>
      </>
    )
  }

}

export default App