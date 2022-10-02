import './App.css';
import Assignment from './Components/Assignment/Assignment';
import Axios from './Components/Axios/Axios';
import Nav from './Components/Nav/Nav';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <h1 className='font-bold text-5xl'>This is big big header</h1>
      <Pricing></Pricing>
      <Assignment></Assignment>
      <Axios></Axios>
    </div>
  );
}

export default App;
