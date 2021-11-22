
import './App.css';
import ReactDOM from "react-dom";
// import Home from './Components/Home';
// import Products from './Components/Products';
// import CartView from './Components/CartView';
// import CheckOut1 from './Components/Checkout1Page';
// import Coupon from './Components/Coupon';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main/Main';
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import Header from './Components/Header'


const App = () => (
  <BrowserRouter>
      {/* <Header/> */}
        <Main/>

      </BrowserRouter>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)
export default App;

