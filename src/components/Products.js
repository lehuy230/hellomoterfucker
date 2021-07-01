import React,{ Component } from 'react';

// import products from './reducers/products';

class Products extends Component{
  
  render(){
    return(
        <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
            {this.props.children}
        </div>
    </section>
    );
  }
 
}
// const mapStateToProps = state =>{
//   return{
//     products:state.products
//   };
// }


export default Products;
