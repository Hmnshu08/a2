import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import { ProductView } from './components/product/productView';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Homepage}>
        </Route>
        <Route path='/product/productView/:id' component={ProductView}></Route>
        {/* <Route component={NotFound}></Route> */}
      </Router>

    </div>
  );
}

export default App;
