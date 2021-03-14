import './App.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Kernel from './kernel';
import Login from './v1/scenes/auth/login';

function App() {
  return (
    <Kernel storage={AsyncStorage}>
      <Login/>
    </Kernel>
  );
}

export default App;
