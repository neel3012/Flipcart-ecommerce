import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Cart from './components/cart/Cart'
import Contextprovider from './contaxt/Contextprovider'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
  useParams
} from "react-router-dom";
import  {TemplateProvider}  from "./templates/TemplateProvider";
import Detailview from './components/product/Detailview'
function App() {
 
  return (
    
    <TemplateProvider>
    <Contextprovider>
 <Router>

      <Header />
      <Switch>
        
        <Route exact path="/cart">
        <Cart/>
        </Route>
        <Route path="/product/:id" component={Detailview}/>
          
       
        <Route exact path="/">
        <Home/>
        </Route>
        
       
      </Switch>
      
    </Router>
    </Contextprovider>
    </TemplateProvider>
   
  );
}

export default App;
