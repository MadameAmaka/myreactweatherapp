import Weather from './Weather';
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="Weather">
      <h1>Weather App</h1>
      <Weather />
      </header>
       <Footer /> 
    </div>
  );
}

export default App;
