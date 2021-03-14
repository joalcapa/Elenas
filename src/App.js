import './App.css';
import Button from './v1/components/commons/Button';
import TextField, {HIGH_TYPE} from './v1/components/commons/TextField';

function App() {
  return (
    <div className="App">
      <Button text="hola mundo" onPress={() => {alert('HOLA MUNDO');}} isGreenButton />
      <TextField text="hola cindy" type={HIGH_TYPE} isTitle />
    </div>
  );
}

export default App;
