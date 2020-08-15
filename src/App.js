import React  from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Avatar from './avatar/Avatar';
import Header from './header/Header';
import Home from './home/Home';
import Contact from './contact/Contact';
import NewProdcuctForm from './product/NewProdcuctForm';
import ProductContextProvider from './context/ProductContext';

function App() {
 
  return (
    <Router>
      <ProductContextProvider>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addproduct" component={NewProdcuctForm} />
        <Route path="/contact" component={Contact} />
      </Switch> 
      </ProductContextProvider>
    </Router>
  );
}

export default App;