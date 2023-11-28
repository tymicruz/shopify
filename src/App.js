import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <NavBar />
//         <Cart />
//         <Switch>
//           <Route path="/products/:handle">
//             <ProductPage />
//           </Route>
//           <Route path="/">
//             < Home />
//           </Route>
//         </Switch>
//         <p>footer</p>
//       </Router>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <NavMenu />
        <Cart />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
