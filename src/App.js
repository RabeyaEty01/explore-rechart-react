
import './App.css';
import MyAreaChart from './components/MyAreaChart/MyAreaChart';
import MyLineChart from './components/MyLineChart/MyLineChart';


function App() {
  return (
    <div className="App">

      <div>
        <h1>Line Chart</h1>
      <MyLineChart></MyLineChart>
      </div>
      <div>
        <h1>Area Chart</h1>
        <MyAreaChart></MyAreaChart>
      </div>
    </div>
  );
}

export default App;
