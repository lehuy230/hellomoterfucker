import React,{ Component } from 'react';
import './App.css';

import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

class App extends Component{
  render(){
    return(
      <div className="App">
       
        <Header/>
        <main id="mainContainer">
            <div className="container">
          
                <ProductsContainer/>
             
                <MessageContainer/>
              
               <CartContainer/>
            </div>
        </main>
    
        <Footer/>
    </div>
    );
  }
}


export default App;
