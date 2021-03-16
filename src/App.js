import AsyncStorage from '@react-native-async-storage/async-storage';

import Kernel from './kernel';
import Navigation from './v1/navigation';

const App = () => (
    <Kernel storage={AsyncStorage}>
        <Navigation />
    </Kernel>
);

export default App;
