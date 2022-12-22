import './App.css';
import Dropdown from './Dropdown';

function App() {
 
  // let listItems=0;
  return (
    <>
    <div className="App">
      <div className="dropdown">
         <button className="dropbtn">Dropdown</button>
          <Dropdown/>
      </div>
    </div>
    </>
  );
}

export default App;
