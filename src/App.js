import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Snippet from './screens/Snippet'

const App = () => {
  return (
   <Router>
     <Route path ='/' exact component={Snippet} />
   </Router>
  );
}

export default App;
