import './App.css';
import Kernel from './kernel';
import Login from './v1/scenes/auth/login';

function App() {
  return (
    <Kernel>
      <Login/>
    </Kernel>
  );
}

export default App;
