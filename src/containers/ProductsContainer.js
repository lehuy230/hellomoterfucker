import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products'
// import products from './reducers/products';
import Product from './../components/Product';
import * as actions from './../actions/index';

class ProductsContainer extends Component{
  
  render(){
    var {products} = this.props;
    console.log(products);
    return(
        <Products>
            {this.showProducts(products)}
        </Products>
        // <div>hello</div>
    );
  }
  showProducts(products){
    var result = null;
    if(products.length>0){
      result=products.map((product,index)=>{
        return <Product key={index} product={product} onAddToCart={this.props.onAddToCart} onChangeMessage={this.props.onChangeMessage}/>
      })
    }
    return result;
  }
}
const mapStateToProps = state =>{
  return{
    products:state.products
  };
}
const mapDispatchToProps=(dispatch,props)=>{
  return{
    onAddToCart:(product)=>{
      dispatch(actions.actAddToCart(product,1))
    },
    onChangeMessage:(message)=>{
      dispatch(actions.actChangeMessage(message));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
