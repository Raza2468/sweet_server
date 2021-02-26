
import { BrowserRouter, Route,Link} from 'react-router-dom';
import Home from './const/Home'
// import Header from './component/Header';

function App() {
  return (
    <BrowserRouter>
    {/* <Header /> */}
    
    <Route  path='/' component={Home} />
    </BrowserRouter>
  );
}

export default App;
