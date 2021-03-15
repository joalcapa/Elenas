import './App.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Kernel from './kernel';
import Create from './v1/scenes/logged/customers/create';

function App() {
  return (
    <Kernel storage={AsyncStorage}>
      <Create />
    </Kernel>
  );
}

export default App;
