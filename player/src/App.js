import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';


function App() {
  return (
    <div className="App">
     <div>
      <ReactPlayer
      url='https://www.youtube.com/watch?v=1aP-TXUpNoU'/>
     </div>
    </div>
  );
}

export default App;
