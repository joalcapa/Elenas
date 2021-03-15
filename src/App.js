import './App.css';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Kernel from './kernel';
import List from './v1/scenes/logged/customers/list';

function App() {
  return (
    <Kernel storage={AsyncStorage}>
      <List />
    </Kernel>
  );
}

export default App;
