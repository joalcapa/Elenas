import logo from './logo.svg';
import './App.css';
import Button from './v1/components/commons/Button';

function App() {
  return (
    <div className="App">
      <Button text="hola mundo" onPress={() => {alert('HOLA MUNDO');}} />
    </div>
  );
}

export default App;
