import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
   <Router>
     <Route path ='/' exact component={HomeScreen} />
   </Router>
  );
}

export default App;
