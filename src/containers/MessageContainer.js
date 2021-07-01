import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Message from './../components/Message';
// import Cart from '../components/Cart';
// import CartItem from '../components/CartItem';
// import CartResult from '../components/CartResult';
// import * as message from '../constants/message';
// import products from './reducers/products';
// import Product from '../components/Product'

class MessageContainer extends Component{
  
  render(){
    var {cart} = this.props;
    console.log(cart);
    return(
        
        <Message message={this.props.message}></Message>
    );
  }
}
  
const mapStateToProps = state =>{
  return{
    message:state.message
  };
}


export default connect(mapStateToProps,null)(MessageContainer);
