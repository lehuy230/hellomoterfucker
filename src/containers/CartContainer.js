import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as message from '../constants/Message';
import * as actions from './../actions/index';
// import products from './reducers/products';
// import Product from '../components/Product'

class CartContainer extends Component{
  
  render(){
    var {cart} = this.props;
    console.log(cart);
    return(
        
        <Cart>
          {this.showCartItem(cart)};
          {this.showTotalAmount(cart)};
        </Cart>
    );
  }
  showCartItem=(cart)=>{
    var result = message.MSG_CART_EMPTY;
    if(cart.length>0){
      result = cart.map((item,index)=>{
       return<CartItem key={index} item={item} onDeleteProductInCart={this.props.onDeleteProductInCart} onChangeMessage={this.props.onChangeMessage} onUpdateProductInCart={this.props.onUpdateProductInCart}/>
      });
    }
    return result;
  }
  showTotalAmount =(cart)=>{
    var result = null;
    if(cart.length>0){
      result=<CartResult cart={cart}/>
    }
    return result;
  }
}
  
const mapStateToProps = state =>{
  return{
    cart:state.cart
  };
}
const mapDispatchToProps = (dispatch,props) =>{
  return{
    onDeleteProductInCart:(product)=>{
      dispatch(actions.actRemoveProductInCart(product));
    },
    onChangeMessage:(message)=>{
      dispatch(actions.actChangeMessage(message));
    },
    onUpdateProductInCart:(product,quantity)=>{
      dispatch(actions.actUpdateProductInCart(product,quantity));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
